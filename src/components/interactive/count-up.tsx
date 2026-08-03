'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * Counts from 0 up to `end` when scrolled into view (once). Respects
 * reduced-motion by rendering the final value immediately. `suffix`/`prefix`
 * wrap the number (e.g. "+", "%").
 */
export default function CountUp({
  end,
  duration = 1.6,
  prefix = '',
  suffix = '',
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setValue(end);
      return;
    }
    let raf = 0;
    let start = 0;
    const step = (t: number) => {
      if (!start) start = t;
      const progress = Math.min((t - start) / (duration * 1000), 1);
      // easeOutCubic for a natural deceleration.
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration, reduceMotion]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
