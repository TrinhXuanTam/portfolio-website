'use client';

import { motion } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

/**
 * Reveals its children one-by-one as the group enters view. Wrap a set of
 * sibling items; each direct child rises + fades in on a stagger. Collapses to
 * a plain fade under reduced motion.
 */
export function Stagger({
  children,
  gap = 0.12,
  y = 30,
  style,
  itemStyle,
}: {
  children: React.ReactNode;
  gap?: number;
  y?: number;
  style?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
}) {
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: gap } },
  };
  const item = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      style={style}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item} style={itemStyle}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
