import { useEffect } from 'react';

// Locks scroll via `position: fixed` rather than `overflow: hidden` on body,
// because overrides.css forces `overflow: visible !important` on body to keep
// the sticky ProfileCard working - toggling overflow here would fight that rule.
export const useBodyScrollLock = (isLocked) => {
  useEffect(() => {
    if (!isLocked) return undefined;

    const scrollY = window.scrollY;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const { style } = document.body;
    const previous = {
      position: style.position,
      top: style.top,
      left: style.left,
      right: style.right,
      width: style.width,
      paddingRight: style.paddingRight,
    };

    style.position = 'fixed';
    style.top = `-${scrollY}px`;
    style.left = '0';
    style.right = '0';
    style.width = '100%';
    if (scrollbarWidth > 0) {
      style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      style.position = previous.position;
      style.top = previous.top;
      style.left = previous.left;
      style.right = previous.right;
      style.width = previous.width;
      style.paddingRight = previous.paddingRight;
      window.scrollTo(0, scrollY);
    };
  }, [isLocked]);
};
