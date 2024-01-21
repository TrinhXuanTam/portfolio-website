'use client';

import Typography from '@mui/material/Typography';
import pacifico from '@/styles/fonts/pacifico';
import Stack from '@mui/material/Stack';
import { motion, AnimationProps } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/material';

export default function Logo({
  sx,
  transition,
}: {
  sx?: SxProps;
  transition?: AnimationProps['transition'];
}) {
  const theme = useTheme();

  return (
    <Stack direction="row" sx={sx}>
      <Typography
        fontFamily={pacifico.style.fontFamily}
        variant="h4"
        noWrap
        sx={{
          fontWeight: 'bold',
          userSelect: 'none',
        }}
      >
        Trinh
      </Typography>
      <motion.span
        initial={{ color: theme.palette.primary.main }}
        animate={{ color: theme.palette.secondary.main }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 5,
          repeatType: 'reverse',
          ...transition,
        }}
      >
        <Stack direction="row">
          <Typography
            fontFamily={pacifico.style.fontFamily}
            variant="h4"
            noWrap
            sx={{
              fontWeight: 'bold',
              userSelect: 'none',
            }}
          >
            .
          </Typography>
          <Typography
            fontFamily={pacifico.style.fontFamily}
            variant="h4"
            noWrap
            sx={{
              fontWeight: 'bold',
              userSelect: 'none',
            }}
          >
            xt
          </Typography>
        </Stack>
      </motion.span>
    </Stack>
  );
}
