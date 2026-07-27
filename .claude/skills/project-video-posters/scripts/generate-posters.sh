#!/usr/bin/env bash
# Generates public/videos/{slug}-poster.webp thumbnails for project showcase
# videos, matching what src/utils/media.js's getProjectVideoSources() expects.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(git -C "$SCRIPT_DIR" rev-parse --show-toplevel)"
VIDEOS_DIR="$REPO_ROOT/public/videos"

FORCE=0
LIST_ONLY=0
SEEK=2
BATCH=100
SLUGS=()

usage() {
  cat <<'EOF'
Usage: generate-posters.sh [--force] [--list] [--seek N] [--batch N] [slug ...]

  --force        Regenerate posters even if one already exists.
  --list         Show which videos have/are missing a poster; generate nothing.
  --seek N       Seconds to seek into the video before sampling frames (default: 2).
  --batch N      Number of frames ffmpeg's `thumbnail` filter scores (default: 100).
  slug ...       Only process these video slugs (filename without .mp4).
                 Default: every *.mp4 in public/videos/.

Examples:
  generate-posters.sh                    # posters for any video missing one
  generate-posters.sh --list              # just report status
  generate-posters.sh kitchen             # regenerate just "kitchen" (skipped if it already has one, unless --force)
  generate-posters.sh --force --seek 5 kitchen   # force-regenerate one slug from a later frame
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --force) FORCE=1; shift ;;
    --list) LIST_ONLY=1; shift ;;
    --seek) SEEK="$2"; shift 2 ;;
    --batch) BATCH="$2"; shift 2 ;;
    -h|--help) usage; exit 0 ;;
    *) SLUGS+=("$1"); shift ;;
  esac
done

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "error: ffmpeg not found on PATH" >&2
  exit 1
fi

if [[ ${#SLUGS[@]} -eq 0 ]]; then
  shopt -s nullglob
  for f in "$VIDEOS_DIR"/*.mp4; do
    SLUGS+=("$(basename "$f" .mp4)")
  done
  shopt -u nullglob
fi

if [[ ${#SLUGS[@]} -eq 0 ]]; then
  echo "No .mp4 files found in $VIDEOS_DIR"
  exit 0
fi

for slug in "${SLUGS[@]}"; do
  mp4="$VIDEOS_DIR/$slug.mp4"
  poster="$VIDEOS_DIR/$slug-poster.webp"

  if [[ ! -f "$mp4" ]]; then
    echo "MISSING VIDEO : $slug (no $slug.mp4 in public/videos/)"
    continue
  fi

  if [[ -f "$poster" && $FORCE -eq 0 ]]; then
    echo "skip (exists) : $slug-poster.webp"
    continue
  fi

  if [[ $LIST_ONLY -eq 1 ]]; then
    echo "would generate: $slug-poster.webp"
    continue
  fi

  ffmpeg -y -ss "$SEEK" -i "$mp4" -vf "thumbnail=$BATCH,scale=1280:-2" -frames:v 1 -an \
    -c:v libwebp -quality 82 "$poster" -loglevel error
  echo "generated     : $slug-poster.webp (seek=${SEEK}s, batch=${BATCH})"
done

if [[ $LIST_ONLY -eq 0 ]]; then
  echo
  echo "Spot-check the generated posters (Read tool renders .webp as an image)."
  echo "If a frame looks blurry/washed-out (mid-transition), rerun for just that slug:"
  echo "  generate-posters.sh --force --seek <N> <slug>"
fi
