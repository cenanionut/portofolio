# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build to `dist/`
- `npm run lint` — ESLint over the whole repo
- `npm run preview` — preview the production build locally

There is no test suite configured in this repo.

Deployment is Firebase Hosting (`firebase.json`, `.firebaserc`), serving the `dist/` directory as a single-page app (all routes rewrite to `/index.html`). Deploy with the Firebase CLI (`firebase deploy`) after building — do this only when explicitly asked.

## Architecture

This is a single-page personal portfolio site: React 19 + Vite + Tailwind CSS v4 (via `@tailwindcss/vite`), with Firebase Realtime Database as an optional live data source and `framer-motion` for animation.

### Data flow: local JSON fallback + live Firebase override

The entire content of the site (projects, experience, skills, education) is driven by one hook: `src/hooks/usePortfolioData.js`.

- It initializes state from `src/data/data.json` (bundled at build time) so the page renders immediately with no loading flash.
- It then subscribes to the Firebase Realtime Database path `data` (see `src/firebase.js`) via `onValue`. If a snapshot exists, it overwrites state with the live data (filtering out `null` entries — Firebase RTDB arrays store gaps as `null`).
- If Firebase errors out, the component silently keeps showing the local JSON fallback.

Any component that renders portfolio content (`RecentProjects`, `Experience`, `Skills`, `Education`) calls this same hook independently — there's no shared context/provider, each component subscribes on its own.

`src/data/education.json`, `experience.json`, `projects.json`, `skills.json` are legacy/unused — nothing imports them. `data.json` is the only live data source; edit it to change fallback content, but know that Firebase RTDB content (if present) takes precedence at runtime.

### Contact form

`src/components/Contact.jsx` writes directly to Firebase RTDB at `contact/{pushId}` (client-side, no backend). Write permissions and payload shape are enforced by `firebase-rules.json` (name/email/message length + email regex validation, no reads allowed, no updates/deletes — only first-write). If you change the form's field set, update `firebase-rules.json` in lockstep or writes will be rejected.

Firebase config is read from `VITE_FIREBASE_*` env vars (see `.env.local.example`) — a local `.env.local` is required just to run the app at all. Without it, `getDatabase(app)` in `src/firebase.js` throws synchronously at module load (missing `databaseURL`), which crashes the entire React render to a blank page — it does **not** gracefully fall back to `data.json`. Vite only reads env files at startup, so after creating/editing `.env.local` the dev server must be restarted (a HMR reload isn't enough).

### Layout structure

`App.jsx` composes the page top-to-bottom: `Navbar` → `MainLayout` (wraps everything else) → `Hero`, `FocusCards`, `RecentProjects`, `Experience`, `Skills`, `Education`, `Contact`.

`MainLayout` implements the two-column desktop layout: a sticky left column (`ProfileCard`) and a scrollable right column (`children`, i.e. all the section components). On mobile it collapses to a single stacked column.

Section-level components live in `src/sections/` (`Hero`, `FocusCards`) vs. `src/components/` (everything else) — this split is pre-existing but not strictly enforced; `sections/` currently holds standalone visual blocks, `components/` holds most functional/data-driven pieces.

Smooth-scroll navigation (`Navbar` and `FocusCards`' CTA links) goes through `src/utils/scrollUtils.js`'s `scrollToElement`, which animates `window.scrollTo` via `framer-motion`'s `animate()` rather than relying on native CSS smooth scroll — keep using this helper for any new in-page nav links instead of `<a href="#id">` default behavior or `scrollIntoView`.

### The `framer/` directory

`framer/wrapper.jsx` and `framer/nav-bar-links.jsx` are machine-generated output from `unframer` (a tool that exports a design authored in Framer into standalone React). They are marked `do not edit manually` and are ~18k/1.3k lines of generated code — never hand-edit them; regenerate via the `unframer` CLI/config if the source Framer project changes. In the current `App.jsx`, `FramerComponent` (from `framer/wrapper`) is imported but not actually rendered anywhere — treat it as inactive/legacy unless you're intentionally reviving it. `framer/styles.css` is imported globally in `main.jsx` alongside `index.css` and `overrides.css`.

### Icons

`src/components/EducationIcons.jsx` hand-rolls inline SVG icon sets (multiple visual "variants" per brand — React, TypeScript, Python, UiPath, etc.) rather than importing icon packages, so brand colors/styling are fully custom per icon. Tech-stack icons used elsewhere live as standalone files under `src/assets/icons/`. General UI icons (nav, arrows) use `lucide-react`.
