---
name: project-video-posters
description: Generate poster thumbnail images (webp) for project showcase videos used in ProjectModal. Use whenever a project video is added, replaced, or removed under public/videos/, or when checking which projects are missing a poster. Only touches videos that don't already have a poster unless told to force-regenerate.
---

# project-video-posters

Generates the `{slug}-poster.webp` thumbnails that `src/utils/media.js`'s `getProjectVideoSources()` expects for every project video in `public/videos/`. Without a poster file, `ProjectModal.jsx`'s `<video>` element (`preload="none"`) renders as a blank black box until the visitor presses play — that's the bug this was originally built to fix.

## Mental model

Each project video lives at `public/videos/{slug}.mp4`, where `{slug}` matches the `videoSlug` field set on that project in the live Firebase RTDB data (see the repo's CLAUDE.md — `data.json` is just the local fallback and doesn't carry `videoSlug`). The modal needs a matching `public/videos/{slug}-poster.webp` sitting right next to it. `.webm` sources were removed from the codebase — don't regenerate them, only mp4 + webp poster.

## Usage

```bash
bash .claude/skills/project-video-posters/scripts/generate-posters.sh              # posters for any video missing one
bash .claude/skills/project-video-posters/scripts/generate-posters.sh --list        # just report status, generate nothing
bash .claude/skills/project-video-posters/scripts/generate-posters.sh kitchen       # only this slug (skipped if it already has a poster)
bash .claude/skills/project-video-posters/scripts/generate-posters.sh --force       # regenerate ALL, even existing ones
bash .claude/skills/project-video-posters/scripts/generate-posters.sh --force --seek 5 docusafe   # redo one slug from a later frame
```

Run with no arguments after adding new videos — it's additive by default: existing posters are left untouched, only videos missing a poster get one. Requires `ffmpeg` on PATH.

Internally it uses ffmpeg's `thumbnail` filter (scores a batch of decoded frames and picks the most "representative" one) after seeking a couple seconds in, which is well suited to these screen-recorded app demos where frame 0 is usually a blank loading state.

## After running — always spot-check

The frame-picking heuristic isn't perfect. After generating, **read each new `{slug}-poster.webp` with the Read tool** (it renders as an image) before calling the task done. Reject anything blurry, washed-out, or mid-transition/tilt — that happened for 2 of the first 5 videos in this project. If a poster looks bad, don't just accept it: rerun for that one slug with a later `--seek` (try 4-6s; these clips tend to settle into a clean static frame a few seconds past any intro animation), e.g.:

```bash
bash .claude/skills/project-video-posters/scripts/generate-posters.sh --force --seek 5 kitchen
```

## Workflow: adding a new project video

1. Drop the file at `public/videos/{slug}.mp4`, where `{slug}` is (or will be) the `videoSlug` value on that project's record in Firebase RTDB.
2. Run the script with no arguments — it generates a poster only for the new video.
3. Spot-check the new poster as above.
4. No code changes needed — `ProjectModal.jsx` and `getProjectVideoSources` already resolve any slug generically.

## Workflow: replacing an existing project video

1. Overwrite `public/videos/{slug}.mp4` with the new footage.
2. The old `{slug}-poster.webp` is now stale but the script won't touch it by default (it only fills in *missing* posters). Force-regenerate that one slug explicitly:
   ```bash
   bash .claude/skills/project-video-posters/scripts/generate-posters.sh --force <slug>
   ```
3. Spot-check.

## Workflow: removing a project video

Delete both `public/videos/{slug}.mp4` and `public/videos/{slug}-poster.webp` manually — this skill only generates, it doesn't clean up orphaned posters.
