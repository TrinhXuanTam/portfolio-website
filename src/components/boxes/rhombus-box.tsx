'use client';

import Box, { BoxProps } from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';

export default function RhombusBox(props: BoxProps) {
  const theme = useTheme();

  return (
    <Box
      {...props}
      sx={{
        ...props.sx,
        backgroundColor: 'primary.dark',
        backgroundImage: `
          linear-gradient(135deg, ${theme.palette.primary.main} 25%, transparent 25%),
          linear-gradient(225deg,  ${theme.palette.primary.main}  25%, transparent 25%),
          linear-gradient(45deg,  ${theme.palette.primary.main} 25%, transparent 25%),
          linear-gradient(315deg,  ${theme.palette.primary.main} 25%,  ${theme.palette.background.default}  25%)
        `,
        opacity: 0.8,
        backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
        backgroundSize: '10px 10px',
        backgroundRepeat: 'repeat',
      }}
    ></Box>
  );
}
