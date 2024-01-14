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
        backgroundColor: 'background.default',
        backgroundImage: `radial-gradient(${theme.palette.background.paper} 9%, transparent 0)`,
        backgroundSize: '35px 35px',
      }}
    ></Box>
  );
}
