'use client';

import Typography from '@mui/material/Typography';
import pacifico from '@/styles/fonts/pacifico';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { motion, AnimationProps } from 'framer-motion';
import { keyframes } from '@emotion/react';
import { useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/material';
import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

const FULL = 'Trinh.xt';
// Index at which the accent-colored part (".xt") begins.
const ACCENT_START = 5;

const blink = keyframes`
  0%, 45% { opacity: 1; }
  50%, 95% { opacity: 0; }
  100% { opacity: 1; }
`;

export default function Logo({
  sx,
  transition,
}: {
  sx?: SxProps;
  transition?: AnimationProps['transition'];
}) {
  const theme = useTheme();
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  // How many characters are currently "typed".
  const [count, setCount] = useState(reduceMotion ? FULL.length : 0);

  useEffect(() => {
    if (reduceMotion) return;
    setCount(0);
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;

    // Human-like cadence: a base delay with random jitter, an occasional
    // longer "thinking" pause, and a deliberate hesitation before the "." so
    // it feels typed by a person rather than a machine.
    const nextDelay = (justTyped: string) => {
      let d = 90 + Math.random() * 130; // base keystroke variance
      if (Math.random() < 0.15) d += 220; // occasional pause
      if (justTyped === 'h') d += 300; // hesitate before ".xt"
      if (justTyped === '.') d += 120;
      return d;
    };

    const step = () => {
      i += 1;
      setCount(i);
      if (i < FULL.length) {
        timeout = setTimeout(step, nextDelay(FULL[i - 1]));
      }
    };
    timeout = setTimeout(step, 500); // brief beat before typing starts
    return () => clearTimeout(timeout);
  }, [reduceMotion]);

  const typed = FULL.slice(0, count);
  const base = typed.slice(0, ACCENT_START);
  const accent = typed.slice(ACCENT_START);
  const done = count >= FULL.length;

  const typeStyle = {
    fontFamily: pacifico.style.fontFamily,
    userSelect: 'none' as const,
  };

  return (
    <Stack direction="row" alignItems="center" sx={sx}>
      <Typography
        variant="h4"
        noWrap
        sx={typeStyle}
        fontWeight={{ xs: 'normal', sm: 'bold' }}
      >
        {base}
      </Typography>
      <Typography
        variant="h4"
        noWrap
        sx={{ ...typeStyle, color: theme.palette.primary.main }}
        fontWeight={{ xs: 'normal', sm: 'bold' }}
      >
        {accent}
      </Typography>
      {/* Caret: solid while typing, blinking once finished. */}
      <Box
        component={motion.span}
        aria-hidden
        transition={transition}
        sx={{
          display: 'inline-block',
          width: { xs: '2px', sm: '3px' },
          height: { xs: '1.4rem', sm: '1.8rem' },
          ml: '3px',
          borderRadius: 1,
          backgroundColor: 'secondary.main',
          animation: done && !reduceMotion ? `${blink} 1.1s step-end infinite` : 'none',
          opacity: reduceMotion ? 0 : 1,
        }}
      />
    </Stack>
  );
}
