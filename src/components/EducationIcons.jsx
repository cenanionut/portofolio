import React from 'react';

// ═══════════════════════════════════════════════════════════════════
// BRAND COLORS — Reference for each icon
// ═══════════════════════════════════════════════════════════════════
// React:       Primary #61DAFB (cyan)
// React Redux: React #61DAFB + Redux #764ABC (purple)
// TypeScript:  Primary #3178C6 (blue)
// Google:      Blue #4285F4, Red #EA4335, Yellow #FBBC05, Green #34A853
// Harvard:     Crimson #A51C30
// Python:      Blue #3776AB, Yellow #FFD43B
// UiPath:      Orange #FA4616
// Unity:       White #FFFFFF on dark
// ═══════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────
//  VARIANT 1 — SOLID VIBRANT
//  Bold filled icons with strong brand colors and subtle color glow
// ─────────────────────────────────────────────────────────────────
const Variant1 = {
  react: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <defs>
        <filter id="reactGlow1" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <circle cx="24" cy="24" r="22" fill="#0A1628" />
      <g filter="url(#reactGlow1)">
        <circle cx="24" cy="24" r="3.5" fill="#61DAFB" />
        <ellipse cx="24" cy="24" rx="16" ry="6.5" stroke="#61DAFB" strokeWidth="1.8" fill="none" />
        <ellipse cx="24" cy="24" rx="16" ry="6.5" stroke="#61DAFB" strokeWidth="1.8" fill="none" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="16" ry="6.5" stroke="#61DAFB" strokeWidth="1.8" fill="none" transform="rotate(120 24 24)" />
      </g>
    </svg>
  ),

  react_redux: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <defs>
        <linearGradient id="rrGrad1" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#61DAFB" />
          <stop offset="100%" stopColor="#764ABC" />
        </linearGradient>
        <filter id="rrGlow1" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <circle cx="24" cy="24" r="22" fill="#0D0B1A" />
      <g filter="url(#rrGlow1)">
        <circle cx="24" cy="24" r="3.5" fill="url(#rrGrad1)" />
        <ellipse cx="24" cy="24" rx="16" ry="6.5" stroke="#61DAFB" strokeWidth="1.4" fill="none" />
        <ellipse cx="24" cy="24" rx="16" ry="6.5" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="16" ry="6.5" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(120 24 24)" />
        {/* Redux accent ring */}
        <circle cx="24" cy="24" r="11" stroke="#764ABC" strokeWidth="2" strokeDasharray="4 3" fill="none" opacity="0.8" />
      </g>
    </svg>
  ),

  typescript: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <rect x="3" y="3" width="42" height="42" rx="8" fill="#3178C6" />
      <text x="24" y="30" dominantBaseline="middle" textAnchor="middle"
        fill="white" fontFamily="'Segoe UI', system-ui, sans-serif" fontWeight="bold" fontSize="20">
        TS
      </text>
    </svg>
  ),

  google: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#1A1A1A" />
      <path d="M36.48 24.48c0-1.18-.1-2.32-.31-3.42H24v6.48h7a6.01 6.01 0 01-2.6 3.93v3.27h4.2c2.46-2.27 3.88-5.61 3.88-10.26z" fill="#4285F4" />
      <path d="M24 38c3.52 0 6.47-1.17 8.63-3.16l-4.2-3.27c-1.17.78-2.66 1.25-4.43 1.25-3.4 0-6.28-2.3-7.32-5.39h-4.33v3.37A13 13 0 0024 38z" fill="#34A853" />
      <path d="M16.68 27.43a7.82 7.82 0 010-4.86v-3.37h-4.33a13 13 0 000 11.6l4.33-3.37z" fill="#FBBC05" />
      <path d="M24 16.18c1.93 0 3.65.66 5.01 1.96l3.75-3.75C30.44 12.38 27.5 11 24 11a13 13 0 00-11.65 7.2l4.33 3.37c1.04-3.1 3.92-5.39 7.32-5.39z" fill="#EA4335" />
    </svg>
  ),

  harvard: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      {/* Shield shape */}
      <path d="M24 4L8 11v11c0 10 6.8 19.4 16 21 9.2-1.6 16-11 16-21V11L24 4z" fill="#A51C30" />
      <path d="M24 4L8 11v11c0 10 6.8 19.4 16 21 9.2-1.6 16-11 16-21V11L24 4z" fill="none" stroke="#C1272D" strokeWidth="1" />
      {/* Bold "H" for Harvard */}
      <text x="24" y="27" dominantBaseline="middle" textAnchor="middle"
        fill="white" fontFamily="'Georgia', 'Times New Roman', serif" fontWeight="bold" fontSize="22">
        H
      </text>
    </svg>
  ),

  python: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <defs>
        <linearGradient id="pyBlue1" x1="12" y1="7" x2="28" y2="28">
          <stop offset="0%" stopColor="#5A9FD4" />
          <stop offset="100%" stopColor="#306998" />
        </linearGradient>
        <linearGradient id="pyYellow1" x1="20" y1="20" x2="36" y2="41">
          <stop offset="0%" stopColor="#FFD43B" />
          <stop offset="100%" stopColor="#FFE873" />
        </linearGradient>
      </defs>
      {/* Top (blue) half */}
      <path d="M23.5 6C17.2 6 13.5 8.4 13.5 12v3.5h10v1.5H11c-3 0-5.5 2.5-5.5 6v6c0 3.5 2.5 6 5.5 6h3v-5c0-3 2.5-5.5 5.5-5.5h10c2.5 0 4.5-2 4.5-4.5V12c0-3-2.2-6-10.5-6zm-5.8 3.5a2 2 0 110 4 2 2 0 010-4z" fill="url(#pyBlue1)" />
      {/* Bottom (yellow) half */}
      <path d="M24.5 42c6.3 0 10-2.4 10-6v-3.5h-10V31H37c3 0 5.5-2.5 5.5-6v-6c0-3.5-2.5-6-5.5-6h-3v5c0 3-2.5 5.5-5.5 5.5h-10c-2.5 0-4.5 2-4.5 4.5V36c0 3 2.2 6 10.5 6zm5.8-3.5a2 2 0 110-4 2 2 0 010 4z" fill="url(#pyYellow1)" />
    </svg>
  ),

  uipath: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <rect x="3" y="3" width="42" height="42" rx="10" fill="#FA4616" />
      {/* Simplified robot head / automation icon */}
      <rect x="15" y="14" width="18" height="14" rx="4" fill="white" opacity="0.95" />
      <circle cx="20" cy="21" r="2.5" fill="#FA4616" />
      <circle cx="28" cy="21" r="2.5" fill="#FA4616" />
      <rect x="20" y="25" width="8" height="2" rx="1" fill="#FA4616" />
      {/* Antenna */}
      <line x1="24" y1="14" x2="24" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="9" r="2" fill="white" />
      {/* Base */}
      <rect x="18" y="30" width="12" height="4" rx="2" fill="white" opacity="0.8" />
    </svg>
  ),

  unity: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#1A1A1A" />
      {/* Unity "U" style cube mark */}
      <g transform="translate(10, 8) scale(1.15)">
        <path d="M12.24 0L6 3.6l2.25 4L12.24 5.6l3.99 2L18.48 3.6 12.24 0z" fill="white" />
        <path d="M5.4 4.7L0 8.3l.2 10.4 8.95 5.3L11.4 20l-6.5-3.7V8.7l5.55-3.2L5.4 4.7z" fill="white" />
        <path d="M19.68 4.7l-5.1-1.3 5.55 3.2v7.6l-6.5 3.7 2.25 4 8.95-5.3.2-10.4-5.35-1.5z" fill="white" opacity="0.85" />
      </g>
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────
//  VARIANT 2 — GRADIENT GLASS
//  Gradient fills with a modern glassmorphic container feel
// ─────────────────────────────────────────────────────────────────
const Variant2 = {
  react: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <defs>
        <radialGradient id="reactBg2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1B3A4B" />
          <stop offset="100%" stopColor="#0A1628" />
        </radialGradient>
        <linearGradient id="reactStroke2" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#61DAFB" />
          <stop offset="50%" stopColor="#A8EDFF" />
          <stop offset="100%" stopColor="#61DAFB" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#reactBg2)" stroke="#61DAFB" strokeWidth="0.5" strokeOpacity="0.3" />
      <circle cx="24" cy="24" r="3.8" fill="url(#reactStroke2)" />
      <ellipse cx="24" cy="24" rx="15" ry="6" stroke="url(#reactStroke2)" strokeWidth="1.6" fill="none" />
      <ellipse cx="24" cy="24" rx="15" ry="6" stroke="url(#reactStroke2)" strokeWidth="1.6" fill="none" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="15" ry="6" stroke="url(#reactStroke2)" strokeWidth="1.6" fill="none" transform="rotate(120 24 24)" />
    </svg>
  ),

  react_redux: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <defs>
        <linearGradient id="rrBg2" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#1A0D2E" />
          <stop offset="100%" stopColor="#0D1B2A" />
        </linearGradient>
        <linearGradient id="rrAtom2" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#61DAFB" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#rrBg2)" stroke="#764ABC" strokeWidth="0.5" strokeOpacity="0.4" />
      <circle cx="24" cy="24" r="3.2" fill="url(#rrAtom2)" />
      <ellipse cx="24" cy="24" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.3" fill="none" opacity="0.8" />
      <ellipse cx="24" cy="24" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.3" fill="none" opacity="0.8" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.3" fill="none" opacity="0.8" transform="rotate(120 24 24)" />
      {/* Redux orbiting ring */}
      <circle cx="24" cy="24" r="10" stroke="#764ABC" strokeWidth="2.2" strokeDasharray="5 4" fill="none" opacity="0.7" />
    </svg>
  ),

  typescript: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <defs>
        <linearGradient id="tsGrad2" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#4A90D9" />
          <stop offset="100%" stopColor="#235A97" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="10" fill="url(#tsGrad2)" />
      <rect x="2" y="2" width="44" height="44" rx="10" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.15" />
      <text x="24" y="30" dominantBaseline="middle" textAnchor="middle"
        fill="white" fontFamily="'Segoe UI', system-ui, sans-serif" fontWeight="bold" fontSize="20" opacity="0.95">
        TS
      </text>
    </svg>
  ),

  google: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <defs>
        <radialGradient id="googleBg2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#222222" />
          <stop offset="100%" stopColor="#111111" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#googleBg2)" stroke="white" strokeWidth="0.4" strokeOpacity="0.1" />
      <g transform="translate(6, 6) scale(0.75)">
        <path d="M36.48 24.48c0-1.18-.1-2.32-.31-3.42H24v6.48h7a6.01 6.01 0 01-2.6 3.93v3.27h4.2c2.46-2.27 3.88-5.61 3.88-10.26z" fill="#4285F4" />
        <path d="M24 38c3.52 0 6.47-1.17 8.63-3.16l-4.2-3.27c-1.17.78-2.66 1.25-4.43 1.25-3.4 0-6.28-2.3-7.32-5.39h-4.33v3.37A13 13 0 0024 38z" fill="#34A853" />
        <path d="M16.68 27.43a7.82 7.82 0 010-4.86v-3.37h-4.33a13 13 0 000 11.6l4.33-3.37z" fill="#FBBC05" />
        <path d="M24 16.18c1.93 0 3.65.66 5.01 1.96l3.75-3.75C30.44 12.38 27.5 11 24 11a13 13 0 00-11.65 7.2l4.33 3.37c1.04-3.1 3.92-5.39 7.32-5.39z" fill="#EA4335" />
      </g>
    </svg>
  ),

  harvard: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <defs>
        <linearGradient id="harvardGrad2" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#C1272D" />
          <stop offset="100%" stopColor="#8B0A1E" />
        </linearGradient>
      </defs>
      <path d="M24 3L6 11v12c0 11.5 7.5 21 18 23 10.5-2 18-11.5 18-23V11L24 3z" fill="url(#harvardGrad2)" />
      <path d="M24 3L6 11v12c0 11.5 7.5 21 18 23 10.5-2 18-11.5 18-23V11L24 3z" fill="none" stroke="#E8B4B8" strokeWidth="0.8" strokeOpacity="0.3" />
      <text x="24" y="27" dominantBaseline="middle" textAnchor="middle"
        fill="white" fontFamily="'Georgia', 'Times New Roman', serif" fontWeight="bold" fontSize="22">
        H
      </text>
    </svg>
  ),

  python: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <defs>
        <linearGradient id="pyBlue2" x1="12" y1="4" x2="30" y2="30">
          <stop offset="0%" stopColor="#5A9FD4" />
          <stop offset="100%" stopColor="#306998" />
        </linearGradient>
        <linearGradient id="pyYellow2" x1="18" y1="18" x2="36" y2="44">
          <stop offset="0%" stopColor="#FFD43B" />
          <stop offset="100%" stopColor="#FFE873" />
        </linearGradient>
        <radialGradient id="pyBg2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1A2332" />
          <stop offset="100%" stopColor="#111820" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#pyBg2)" />
      <g transform="translate(5, 4) scale(0.84)">
        <path d="M23.5 6C17.2 6 13.5 8.4 13.5 12v3.5h10v1.5H11c-3 0-5.5 2.5-5.5 6v6c0 3.5 2.5 6 5.5 6h3v-5c0-3 2.5-5.5 5.5-5.5h10c2.5 0 4.5-2 4.5-4.5V12c0-3-2.2-6-10.5-6zm-5.8 3.5a2 2 0 110 4 2 2 0 010-4z" fill="url(#pyBlue2)" />
        <path d="M24.5 42c6.3 0 10-2.4 10-6v-3.5h-10V31H37c3 0 5.5-2.5 5.5-6v-6c0-3.5-2.5-6-5.5-6h-3v5c0 3-2.5 5.5-5.5 5.5h-10c-2.5 0-4.5 2-4.5 4.5V36c0 3 2.2 6 10.5 6zm5.8-3.5a2 2 0 110-4 2 2 0 010 4z" fill="url(#pyYellow2)" />
      </g>
    </svg>
  ),

  uipath: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <defs>
        <linearGradient id="uiGrad2" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#E03E00" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#uiGrad2)" />
      {/* Robot head */}
      <rect x="14" y="15" width="20" height="14" rx="5" fill="white" opacity="0.95" />
      <circle cx="20" cy="22" r="2.8" fill="#FA4616" />
      <circle cx="28" cy="22" r="2.8" fill="#FA4616" />
      <path d="M20 26.5h8" stroke="#FA4616" strokeWidth="2" strokeLinecap="round" />
      {/* Antenna */}
      <line x1="24" y1="15" x2="24" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="9" r="2.2" fill="white" />
      {/* Base */}
      <rect x="17" y="31" width="14" height="4" rx="2" fill="white" opacity="0.7" />
    </svg>
  ),

  unity: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <defs>
        <radialGradient id="unityBg2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2A2A2A" />
          <stop offset="100%" stopColor="#111111" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#unityBg2)" stroke="white" strokeWidth="0.5" strokeOpacity="0.15" />
      <g transform="translate(8, 7) scale(1.35)">
        <path d="M12.24 0L6 3.6l2.25 4L12.24 5.6l3.99 2L18.48 3.6 12.24 0z" fill="white" />
        <path d="M5.4 4.7L0 8.3l.2 10.4 8.95 5.3L11.4 20l-6.5-3.7V8.7l5.55-3.2L5.4 4.7z" fill="white" />
        <path d="M19.68 4.7l-5.1-1.3 5.55 3.2v7.6l-6.5 3.7 2.25 4 8.95-5.3.2-10.4-5.35-1.5z" fill="white" opacity="0.85" />
      </g>
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────
//  VARIANT 3 — NEON OUTLINED
//  Neon-style outlined icons with glow/bloom effects
// ─────────────────────────────────────────────────────────────────
const Variant3 = {
  react: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <defs>
        <filter id="neonReact3" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="#050D15" stroke="#61DAFB" strokeWidth="0.6" strokeOpacity="0.2" />
      <g filter="url(#neonReact3)">
        <circle cx="24" cy="24" r="3" fill="#61DAFB" />
        <ellipse cx="24" cy="24" rx="15" ry="6" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
        <ellipse cx="24" cy="24" rx="15" ry="6" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="15" ry="6" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 24 24)" />
      </g>
    </svg>
  ),

  react_redux: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <defs>
        <filter id="neonRR3" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="#080510" stroke="#764ABC" strokeWidth="0.6" strokeOpacity="0.25" />
      <g filter="url(#neonRR3)">
        <circle cx="24" cy="24" r="2.8" fill="#61DAFB" />
        <ellipse cx="24" cy="24" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1" fill="none" />
        <ellipse cx="24" cy="24" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 24 24)" />
        <circle cx="24" cy="24" r="10.5" stroke="#764ABC" strokeWidth="1.6" strokeDasharray="4.5 3.5" fill="none" />
      </g>
    </svg>
  ),

  typescript: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <defs>
        <filter id="neonTS3" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect x="3" y="3" width="42" height="42" rx="8" fill="#0D1B2A" stroke="#3178C6" strokeWidth="1.5" />
      <g filter="url(#neonTS3)">
        <text x="24" y="30" dominantBaseline="middle" textAnchor="middle"
          fill="#3178C6" fontFamily="'Segoe UI', system-ui, sans-serif" fontWeight="bold" fontSize="20">
          TS
        </text>
      </g>
    </svg>
  ),

  google: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <defs>
        <filter id="neonGoogle3" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="#080808" stroke="white" strokeWidth="0.4" strokeOpacity="0.08" />
      <g filter="url(#neonGoogle3)" transform="translate(6, 6) scale(0.75)">
        <path d="M36.48 24.48c0-1.18-.1-2.32-.31-3.42H24v6.48h7a6.01 6.01 0 01-2.6 3.93v3.27h4.2c2.46-2.27 3.88-5.61 3.88-10.26z" fill="#4285F4" />
        <path d="M24 38c3.52 0 6.47-1.17 8.63-3.16l-4.2-3.27c-1.17.78-2.66 1.25-4.43 1.25-3.4 0-6.28-2.3-7.32-5.39h-4.33v3.37A13 13 0 0024 38z" fill="#34A853" />
        <path d="M16.68 27.43a7.82 7.82 0 010-4.86v-3.37h-4.33a13 13 0 000 11.6l4.33-3.37z" fill="#FBBC05" />
        <path d="M24 16.18c1.93 0 3.65.66 5.01 1.96l3.75-3.75C30.44 12.38 27.5 11 24 11a13 13 0 00-11.65 7.2l4.33 3.37c1.04-3.1 3.92-5.39 7.32-5.39z" fill="#EA4335" />
      </g>
    </svg>
  ),

  harvard: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <defs>
        <filter id="neonHarvard3" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="#0D0508" />
      <g filter="url(#neonHarvard3)">
        <path d="M24 5L8 12v11c0 10 6.8 19.4 16 21 9.2-1.6 16-11 16-21V12L24 5z" fill="none" stroke="#A51C30" strokeWidth="2" />
        <text x="24" y="27" dominantBaseline="middle" textAnchor="middle"
          fill="#E8384F" fontFamily="'Georgia', 'Times New Roman', serif" fontWeight="bold" fontSize="20">
          H
        </text>
      </g>
    </svg>
  ),

  python: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <defs>
        <filter id="neonPy3" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="#080C11" />
      <g filter="url(#neonPy3)" transform="translate(5, 4) scale(0.84)">
        <path d="M23.5 6C17.2 6 13.5 8.4 13.5 12v3.5h10v1.5H11c-3 0-5.5 2.5-5.5 6v6c0 3.5 2.5 6 5.5 6h3v-5c0-3 2.5-5.5 5.5-5.5h10c2.5 0 4.5-2 4.5-4.5V12c0-3-2.2-6-10.5-6zm-5.8 3.5a2 2 0 110 4 2 2 0 010-4z" fill="none" stroke="#5A9FD4" strokeWidth="1.5" />
        <path d="M24.5 42c6.3 0 10-2.4 10-6v-3.5h-10V31H37c3 0 5.5-2.5 5.5-6v-6c0-3.5-2.5-6-5.5-6h-3v5c0 3-2.5 5.5-5.5 5.5h-10c-2.5 0-4.5 2-4.5 4.5V36c0 3 2.2 6 10.5 6zm5.8-3.5a2 2 0 110-4 2 2 0 010 4z" fill="none" stroke="#FFD43B" strokeWidth="1.5" />
      </g>
    </svg>
  ),

  uipath: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <defs>
        <filter id="neonUi3" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="#0E0704" stroke="#FA4616" strokeWidth="1" strokeOpacity="0.3" />
      <g filter="url(#neonUi3)">
        {/* Robot head outline */}
        <rect x="14" y="15" width="20" height="14" rx="5" fill="none" stroke="#FA4616" strokeWidth="1.8" />
        <circle cx="20" cy="22" r="2.5" fill="#FA4616" />
        <circle cx="28" cy="22" r="2.5" fill="#FA4616" />
        <path d="M20 26.5h8" stroke="#FA4616" strokeWidth="1.8" strokeLinecap="round" />
        {/* Antenna */}
        <line x1="24" y1="15" x2="24" y2="10" stroke="#FA4616" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="24" cy="9" r="2" fill="#FA4616" />
        {/* Base */}
        <rect x="17" y="31" width="14" height="3.5" rx="1.8" fill="none" stroke="#FA4616" strokeWidth="1.5" />
      </g>
    </svg>
  ),

  unity: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
      <defs>
        <filter id="neonUnity3" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="#080808" stroke="white" strokeWidth="0.5" strokeOpacity="0.12" />
      <g filter="url(#neonUnity3)" transform="translate(8, 7) scale(1.35)">
        <path d="M12.24 0L6 3.6l2.25 4L12.24 5.6l3.99 2L18.48 3.6 12.24 0z" fill="none" stroke="white" strokeWidth="1.2" />
        <path d="M5.4 4.7L0 8.3l.2 10.4 8.95 5.3L11.4 20l-6.5-3.7V8.7l5.55-3.2L5.4 4.7z" fill="none" stroke="white" strokeWidth="1.2" />
        <path d="M19.68 4.7l-5.1-1.3 5.55 3.2v7.6l-6.5 3.7 2.25 4 8.95-5.3.2-10.4-5.35-1.5z" fill="none" stroke="white" strokeWidth="1.2" opacity="0.85" />
      </g>
    </svg>
  ),
};

// ═══════════════════════════════════════════════════════════════════
//  EXPORTED VARIANTS MAP
// ═══════════════════════════════════════════════════════════════════
export const IconVariants = {
  1: Variant1,
  2: Variant2,
  3: Variant3,
};

// Default export: Variant 1 (Solid Vibrant)
export default Variant1;
