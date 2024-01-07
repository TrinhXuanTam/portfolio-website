'use client'

import { motion, useSpring, useScroll } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

export default function ScrollIndicator() {
  const theme = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        zIndex: 9999,
        right: '10px',
        top: '25%',
        transform: 'translateY(-50%)',
        height: '10vh',
        width: '5px',
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <motion.div
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: theme.palette.primary.dark,
          scaleY: scaleY,
          originY: 0,
        }}
      />
    </motion.div>
  );
}
