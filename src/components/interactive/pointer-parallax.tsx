'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * Drifts its children a few pixels in response to global cursor position, for a
 * subtle depth effect (e.g. the hero portrait). `intensity` is the max px of
 * travel. Inert on touch / reduced-motion.
 */
export default function PointerParallax({
  children,
  intensity = 20,
}: {
  children: React.ReactNode;
  intensity?: number;
}) {
  const hasHover = useMediaQuery('(hover: hover)');
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const enabled = hasHover && !reduceMotion;

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const spring = { stiffness: 120, damping: 20 };
  const x = useSpring(useTransform(mx, [0, 1], [-intensity, intensity]), spring);
  const y = useSpring(useTransform(my, [0, 1], [-intensity, intensity]), spring);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [enabled, mx, my]);

  return <motion.div style={{ x: enabled ? x : 0, y: enabled ? y : 0 }}>{children}</motion.div>;
}
