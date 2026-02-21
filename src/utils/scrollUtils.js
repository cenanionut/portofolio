import { animate } from 'framer-motion';

/**
 * Scrolls smoothly to a target element or position with a premium feel.
 * @param {string|number} target - The ID of the element to scroll to, or a pixel value.
 * @param {object} options - Optional configuration.
 * @param {number} options.duration - Animation duration in seconds (default: 1.2).
 * @param {number[]} options.ease - Custom cubic bezier ease (default: [0.65, 0, 0.35, 1]).
 * @param {number} options.offset - Pixel offset from the target top (default: 0).
 */
export const scrollToElement = (target, options = {}) => {
  const { 
    duration = 1.2, 
    ease = [0.65, 0, 0.35, 1], // Quintic-like ease-in-out
    offset = 0 
  } = options;

  let targetY = 0;

  if (typeof target === 'string') {
    const element = document.getElementById(target);
    if (!element) return;
    targetY = element.getBoundingClientRect().top + window.scrollY + offset;
  } else if (typeof target === 'number') {
    targetY = target + offset;
  }

  const startY = window.scrollY;

  // Prevent dual animations if possible
  animate(startY, targetY, {
    duration,
    ease,
    onUpdate: (latest) => window.scrollTo(0, latest),
  });
};
