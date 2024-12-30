'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function CustomCursor() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const theme = useTheme();

  // 1) Track raw pointer location, no offset
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);

  // 2) Track speed
  const speed = useMotionValue(0);
  const previousPosition = useRef({ x: -100, y: -100 });

  // Whether we are over a clickable element
  const [isOverClickable, setIsOverClickable] = useState(false);

  // Base size from speed
  const baseSize = useTransform(speed, (s) => {
    return Math.min(16 + s * 0.2, 50);
  });

  // Extra size if hovering clickable
  const clickableExtraValue = useMotionValue(0);
  const clickableExtraSpring = useSpring(clickableExtraValue, {
    damping: 20,
    stiffness: 300,
  });

  useEffect(() => {
    // e.g. +20px if clickable, or 0 otherwise
    clickableExtraValue.set(isOverClickable ? 20 : 0);
  }, [isOverClickable, clickableExtraValue]);

  // Combine base + extra
  const finalCursorSize = useTransform<number, number>(
    [baseSize, clickableExtraSpring],
    // The second argument must accept an array (e.g. `[number, number]`)
    ([base, extra]) => base + extra
  );
  // 3) Offset by half the current size so the circle stays centered
  const finalCursorX = useTransform<number, number>(
    [pointerX, finalCursorSize],
    ([x, size]) => x - size / 2
  );
  const finalCursorY = useTransform<number, number>(
    [pointerY, finalCursorSize],
    ([y, size]) => y - size / 2
  );

  // 4) Apply springs for smooth movement
  const springConfig = { damping: 50, stiffness: 2000 };
  const cursorXSpring = useSpring(finalCursorX, springConfig);
  const cursorYSpring = useSpring(finalCursorY, springConfig);
  const finalSizeSpring = useSpring(finalCursorSize, springConfig);

  useEffect(() => {
    // Decide if an element is clickable
    const isElementClickable = (el: Element) => {
      if (!(el instanceof HTMLElement)) return false;
      const tag = el.tagName.toLowerCase();
      if (tag === 'a' || tag === 'button') return true;
      if (el.classList.contains('MuiButtonBase-root')) return true;
      if (el.getAttribute('role') === 'button') return true;
      if (el.hasAttribute('onClick')) return true;
      return false;
    };

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Update speed
      const dx = clientX - previousPosition.current.x;
      const dy = clientY - previousPosition.current.y;
      const movementSpeed = Math.sqrt(dx * dx + dy * dy);
      speed.set(movementSpeed);

      previousPosition.current = { x: clientX, y: clientY };

      // Update pointer location (no offset)
      pointerX.set(clientX);
      pointerY.set(clientY);

      // Check if ANY element at that point is clickable
      const elements = document.elementsFromPoint(clientX, clientY);
      const foundClickable = elements.some(isElementClickable);
      setIsOverClickable(foundClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [pointerX, pointerY, speed]);

  return (
    <motion.div
      style={{
        // Position the cursor by translating it
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        width: finalSizeSpring,
        height: finalSizeSpring,
        position: 'fixed',
        left: 0,
        top: 0,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        backgroundColor: isOverClickable
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
        display: isMobile ? 'none' : 'block',
      }}
    />
  );
}
