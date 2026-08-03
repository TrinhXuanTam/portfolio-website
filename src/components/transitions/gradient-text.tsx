'use client';

import { keyframes } from '@emotion/react';
import Box, { BoxProps } from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const shimmer = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

/**
 * Renders text with an animated accent gradient sweeping across it. Falls back
 * to a static gradient under reduced motion. Inherits font sizing/weight from
 * the parent, so it drops into existing Typography.
 */
export default function GradientText({ sx, children, ...rest }: BoxProps) {
  const theme = useTheme();
  const from = theme.palette.primary.main;
  const to = theme.palette.secondary.main;

  return (
    <Box
      component="span"
      {...rest}
      sx={{
        display: 'inline-block',
        backgroundImage: `linear-gradient(90deg, ${from}, ${to}, ${from})`,
        backgroundSize: '200% auto',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
        '@media (prefers-reduced-motion: no-preference)': {
          animation: `${shimmer} 6s linear infinite`,
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
