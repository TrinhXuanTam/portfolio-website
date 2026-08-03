'use client';

import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * Line-mask heading reveal: each line sits in an overflow-hidden clip and rises
 * into view (y: 110% -> 0), staggered. Inherits type styles from the parent
 * Typography it's placed in. Collapses to a plain fade under reduced motion.
 */
export default function MaskReveal({
  lines,
  delay = 0,
  lineHeight = 1.1,
}: {
  lines: React.ReactNode[];
  delay?: number;
  lineHeight?: number;
}) {
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  return (
    <>
      {lines.map((line, i) => (
        <Box key={i} sx={{ overflow: 'hidden', display: 'block', lineHeight }}>
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { y: '110%' }}
            whileInView={reduceMotion ? { opacity: 1 } : { y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.div>
        </Box>
      ))}
    </>
  );
}
