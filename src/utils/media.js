// Single source of truth for where video/poster assets are hosted.
// Swap VITE_MEDIA_BASE (e.g. to a Cloudflare R2 URL) to migrate without touching call sites.
export const MEDIA_BASE = import.meta.env.VITE_MEDIA_BASE ?? '';

export const getProjectVideoSources = (videoSlug) => {
  if (!videoSlug) return null;

  return {
    mp4: `${MEDIA_BASE}/videos/${videoSlug}.mp4`,
    poster: `${MEDIA_BASE}/videos/${videoSlug}-poster.webp`,
  };
};
