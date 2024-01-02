'use client';

import * as React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import EmotionCacheProvider from '@/providers/theme/emotion-cache-provider';
import darkTheme from '@/styles/themes/dark';
import lightTheme from '@/styles/themes/light';
import { ThemeToggleContext } from '@/providers/theme/theme-toggle-context';

enum ColorMode {
  Light = 'light',
  Dark = 'dark',
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = React.useState<ColorMode>(ColorMode.Dark);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === ColorMode.Dark ? ColorMode.Light : ColorMode.Dark
        );
      },
    }),
    []
  );

  const theme = React.useMemo(
    () => (mode === ColorMode.Dark ? darkTheme : lightTheme),
    [mode]
  );

  return (
    <EmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeToggleContext.Provider value={colorMode}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </ThemeToggleContext.Provider>
    </EmotionCacheProvider>
  );
}
