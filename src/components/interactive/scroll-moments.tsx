'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * Two ambient scroll "moments" keyed to overall page progress:
 *  - Midpoint (~50%): a soft brand-light band sweeps down the viewport.
 *  - Near bottom (~85-100%): a glow blooms up from the base of the page.
 * Both are fixed, click-through, theme-colored, and fade to nothing outside
 * their window. Driven purely by motion values (no React re-renders), so they
 * never interfere with scrolling. Disabled under reduced motion.
 */
export default function ScrollMoments() {
  const theme = useTheme();
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const { scrollYProgress } = useScroll();

  const sweepOpacity = useTransform(
    scrollYProgress,
    [0.42, 0.5, 0.58],
    [0, 0.55, 0]
  );
  const sweepY = useTransform(scrollYProgress, [0.42, 0.58], ['-35%', '35%']);

  const bloomOpacity = useTransform(scrollYProgress, [0.82, 1], [0, 0.9]);
  const bloomScale = useTransform(scrollYProgress, [0.82, 1], [0.6, 1.1]);

  if (reduceMotion) return null;

  const p = theme.palette.primary.main;
  const s = theme.palette.secondary.main;

  return (
    <Box aria-hidden sx={{ position: 'fixed', inset: 0, zIndex: 5, pointerEvents: 'none' }}>
      <motion.div
        style={{
          opacity: sweepOpacity,
          y: sweepY,
          position: 'absolute',
          left: 0,
          right: 0,
          top: '50%',
          height: '45vh',
          translateY: '-50%',
          background: `radial-gradient(ellipse 70% 50% at center, ${p}44, ${s}18 45%, transparent 75%)`,
          filter: 'blur(55px)',
        }}
      />
      <motion.div
        style={{
          opacity: bloomOpacity,
          scale: bloomScale,
          position: 'absolute',
          bottom: '-30%',
          left: '50%',
          translateX: '-50%',
          width: '80vw',
          height: '80vh',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${p}33, ${s}18 45%, transparent 70%)`,
          filter: 'blur(80px)',
        }}
      />
    </Box>
  );
}
