'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function CustomCursor() {
  const isMobile = useMediaQuery('(max-width: 600px)');

  const theme = useTheme();
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 50, stiffness: 2000 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="cursor"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        backgroundColor: theme.palette.primary.main,
        position: 'fixed',
        left: 0,
        top: 0,
        width: '16px',
        height: '16px',
        borderRadius: '16px',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
        display: isMobile ? 'none' : 'block',
      }}
    />
  );
}
