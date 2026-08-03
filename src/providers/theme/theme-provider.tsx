'use client';

import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import darkTheme from '@/styles/themes/dark';
import lightTheme from '@/styles/themes/light';
import { ThemeToggleContext, ColorMode } from './theme-toggle-context';

const STORAGE_KEY = 'color-mode';

/** Dark between 19:00 and 07:00 local time, light during the day. */
function modeForCurrentTime(): ColorMode {
  const hour = new Date().getHours();
  return hour >= 19 || hour < 7 ? ColorMode.Dark : ColorMode.Light;
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize from the value the pre-paint inline script already resolved
  // (window.__COLOR_MODE__), so the first client render matches what's painted
  // and there's no flash. Falls back to time-of-day if the script didn't run.
  const [mode, setMode] = React.useState<ColorMode>(() => {
    if (typeof window !== 'undefined') {
      const pre = (window as { __COLOR_MODE__?: ColorMode }).__COLOR_MODE__;
      if (pre === ColorMode.Dark || pre === ColorMode.Light) return pre;
      const stored = window.localStorage.getItem(STORAGE_KEY) as ColorMode | null;
      if (stored === ColorMode.Dark || stored === ColorMode.Light) return stored;
      return modeForCurrentTime();
    }
    return ColorMode.Light;
  });

  const toggleColorMode = React.useCallback(() => {
    setMode((prevMode) => {
      const next =
        prevMode === ColorMode.Dark ? ColorMode.Light : ColorMode.Dark;
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const contextValue = React.useMemo(
    () => ({
      mode,
      toggleColorMode,
    }),
    [mode, toggleColorMode]
  );

  const theme = mode === ColorMode.Dark ? darkTheme : lightTheme;

  return (
    <ThemeToggleContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeToggleContext.Provider>
  );
}
