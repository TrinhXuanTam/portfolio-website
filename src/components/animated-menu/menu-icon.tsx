'use client';

import * as React from 'react';
import { motion, MotionProps } from 'framer-motion';
import useTheme from '@mui/material/styles/useTheme';
import Button from '@mui/material/Button';
import { SxProps } from '@mui/material';

function Path(
  props: Omit<React.SVGAttributes<SVGPathElement>, 'ref'> & MotionProps
) {
  const theme = useTheme();
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={theme.palette.text.primary}
      strokeLinecap="round"
      {...props}
    />
  );
}

export default function MenuIcon({
  toggle,
  style,
  sx,
}: {
  toggle: () => void;
  style: React.CSSProperties;
  sx?: SxProps;
}) {
  return (
    <Button onClick={toggle} style={style} disableRipple sx={sx}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </Button>
  );
}
