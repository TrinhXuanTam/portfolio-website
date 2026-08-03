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

/** Resolve the mode from storage (manual choice) or time-of-day. Client only. */
function resolveMode(): ColorMode {
  const pre = (window as { __COLOR_MODE__?: ColorMode }).__COLOR_MODE__;
  if (pre === ColorMode.Dark || pre === ColorMode.Light) return pre;
  const stored = window.localStorage.getItem(STORAGE_KEY) as ColorMode | null;
  if (stored === ColorMode.Dark || stored === ColorMode.Light) return stored;
  return modeForCurrentTime();
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // The correct mode is only knowable on the client (localStorage / clock), so
  // SSR can't render it. We resolve it after mount and gate rendering until
  // then — the pre-paint inline script has already painted the correct
  // background, so the gate shows that background (no wrong-themed flash).
  const [mode, setMode] = React.useState<ColorMode>(ColorMode.Light);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMode(resolveMode());
    setMounted(true);
  }, []);

  const toggleColorMode = React.useCallback(() => {
    setMode((prevMode) => {
      const next =
        prevMode === ColorMode.Dark ? ColorMode.Light : ColorMode.Dark;
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const contextValue = React.useMemo(
    () => ({ mode, toggleColorMode }),
    [mode, toggleColorMode]
  );

  const theme = mode === ColorMode.Dark ? darkTheme : lightTheme;

  // Expose readiness so consumers (e.g. body) can gate visibility without
  // introducing an extra wrapping element that would break HTML nesting.
  React.useEffect(() => {
    document.body.style.visibility = 'visible';
  }, [mounted]);

  return (
    <ThemeToggleContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeToggleContext.Provider>
  );
}
