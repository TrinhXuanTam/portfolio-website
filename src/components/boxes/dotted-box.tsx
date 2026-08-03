'use client';

import Box, { BoxProps } from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useRef } from 'react';

/**
 * Dotted background with an interactive "spotlight": the base grid is dim, and
 * a second accent-colored grid is revealed only within a soft radius around the
 * cursor — like a flashlight sweeping over the dots. The spotlight position is
 * pushed to CSS variables via a rAF-throttled pointer listener (no re-renders).
 * On touch / reduced-motion it falls back to the plain dot grid.
 */
export default function DottedBox(props: BoxProps) {
  const theme = useTheme();
  const hasHover = useMediaQuery('(hover: hover)');
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const spotlightRef = useRef<HTMLDivElement>(null);
  const interactive = hasHover && !reduceMotion;

  useEffect(() => {
    if (!interactive) return;
    const el = spotlightRef.current;
    if (!el) return;
    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    const render = () => {
      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
      raf = 0;
    };
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(render);
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [interactive]);

  return (
    <Box
      {...props}
      sx={{
        position: 'relative',
        backgroundColor: 'background.default',
        // Base (dim) dot grid.
        backgroundImage: `radial-gradient(${theme.palette.background.paper} 9%, transparent 0)`,
        backgroundSize: '35px 35px',
        ...props.sx,
      }}
    >
      {interactive && (
        <Box
          ref={spotlightRef}
          aria-hidden
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            // Accent-colored dot grid, aligned to the base grid...
            backgroundImage: `radial-gradient(${theme.palette.primary.main} 9%, transparent 0)`,
            backgroundSize: '35px 35px',
            // ...revealed only near the cursor via a radial mask.
            WebkitMaskImage:
              'radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), #000 0%, transparent 70%)',
            maskImage:
              'radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), #000 0%, transparent 70%)',
            transition: 'opacity 0.3s ease',
          }}
        />
      )}
      <Box sx={{ position: 'relative', zIndex: 1 }}>{props.children}</Box>
    </Box>
  );
}
