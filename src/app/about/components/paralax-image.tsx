'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Box from '@mui/material/Box';

export default function ParalaxImage({
  src,
  alt,
}: {
  src: string;
  alt?: string;
}) {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
  });
  const translateY = useTransform(scrollY, [0, 500], ['0vh', '30rem']);
  const opacity = useTransform(scrollY, [0, 700], [1, 0]);
  return (
    <Box
      ref={ref}
      sx={{ overflow: 'hidden', height: '30rem', position: 'relative' }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          objectFit: 'cover',
          position: 'absolute',
          bottom: 0,
          translateY,
          opacity,
        }}
      />
    </Box>
  );
}
