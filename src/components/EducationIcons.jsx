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

// Default export: Solid Vibrant icons
export default Variant1;

