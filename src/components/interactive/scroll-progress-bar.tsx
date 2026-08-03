'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

/**
 * Thin progress bar fixed to the top of the viewport, tracking overall page
 * scroll. Spring-smoothed so it glides. Uses the active theme's accent colors,
 * so it adapts to light/dark automatically.
 */
export default function ScrollProgressBar() {
  const theme = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 10000,
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      }}
    />
  );
}
