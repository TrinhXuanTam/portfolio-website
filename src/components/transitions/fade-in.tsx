'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function FadeIn({
  children,
  direction = 'center',
  duration = 0.5,
  delay = 0,
  once = false,
}: {
  children?: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down' | 'center';
  duration?: number;
  delay?: number;
  once?: boolean;
}) {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? -50 : direction === 'down' ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      transition={{ duration, delay: delay + 0.5 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
