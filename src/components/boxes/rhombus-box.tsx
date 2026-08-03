'use client';

import Box, { BoxProps } from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';
import { keyframes } from '@emotion/react';

// Slowly drift the diagonal stripe pattern so the fill feels alive, and add a
// gentle vertical float. Both pause for users who prefer reduced motion.
const drift = keyframes`
  from { background-position: 10px 0, 10px 0, 0 0, 0 0; }
  to   { background-position: 90px 80px, 90px 80px, 80px 80px, 80px 80px; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-12px); }
`;

export default function RhombusBox(props: BoxProps) {
  const theme = useTheme();

  return (
    <Box
      {...props}
      sx={{
        backgroundColor: 'primary.dark',
        backgroundImage: `
          linear-gradient(135deg, ${theme.palette.primary.main} 25%, transparent 25%),
          linear-gradient(225deg,  ${theme.palette.primary.main}  25%, transparent 25%),
          linear-gradient(45deg,  ${theme.palette.primary.main} 25%, transparent 25%),
          linear-gradient(315deg,  ${theme.palette.primary.main} 25%,  ${theme.palette.background.default}  25%)
        `,
        opacity: theme.palette.mode === 'dark' ? 0.8 : 1,
        backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
        backgroundSize: '10px 10px',
        backgroundRepeat: 'repeat',
        '@media (prefers-reduced-motion: no-preference)': {
          animation: `${drift} 8s linear infinite, ${float} 6s ease-in-out infinite`,
        },
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
}
