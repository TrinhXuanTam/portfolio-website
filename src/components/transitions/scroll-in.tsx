'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollIn({
  children,
  intensity = 30,
  direction = 'down',
}: {
  children?: React.ReactNode;
  intensity?: number;
  direction?: 'up' | 'down';
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'down'
      ? [`-${intensity}vh`, '0vh']
      : [`${intensity}vh`, '0vh']
  );

  return (
    <motion.div
      ref={ref}
      style={{
        translateY: translateY,
      }}
    >
      {children}
    </motion.div>
  );
}
