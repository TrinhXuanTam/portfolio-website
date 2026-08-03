'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * Tilts its children toward the cursor in 3D on hover, with a soft spring back
 * to flat on leave. Disabled on touch / reduced-motion (renders inert).
 *
 * `max` is the peak tilt in degrees.
 */
export default function Tilt({
  children,
  max = 10,
}: {
  children: React.ReactNode;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hasHover = useMediaQuery('(hover: hover)');
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const enabled = hasHover && !reduceMotion;

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 250, damping: 20 };
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX: enabled ? rotateX : 0,
        rotateY: enabled ? rotateY : 0,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
        height: '100%',
      }}
    >
      {children}
    </motion.div>
  );
}
