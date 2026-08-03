'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * Gently pulls its children toward the cursor while hovered, springing back to
 * center on leave. Inert on touch / reduced-motion. `strength` scales how far
 * the element follows the pointer.
 */
export default function Magnetic({
  children,
  strength = 0.4,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hasHover = useMediaQuery('(hover: hover)');
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const enabled = hasHover && !reduceMotion;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const config = { stiffness: 200, damping: 15, mass: 0.3 };
  const xs = useSpring(x, config);
  const ys = useSpring(y, config);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: xs, y: ys, display: 'inline-block' }}
    >
      {children}
    </motion.div>
  );
}
