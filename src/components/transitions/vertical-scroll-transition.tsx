'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollTransition({
  children,
  direction = 'up',
}: {
  children?: React.ReactNode;
  direction?: 'up' | 'down';
  offset?: [string, string];
}) {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const translateY = useTransform(
    scrollY,
    [0, 500],
    ['0vh', `${direction === 'up' ? 25 : -25}rem`]
  );
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  return (
    <motion.div ref={ref} style={{ translateY, opacity }}>
      {children}
    </motion.div>
  );
}
