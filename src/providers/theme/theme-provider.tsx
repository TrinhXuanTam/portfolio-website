'use client';

import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import darkTheme from '@/styles/themes/dark';
import lightTheme from '@/styles/themes/light';
import { ThemeToggleContext, ColorMode } from './theme-toggle-context';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = React.useState<ColorMode>(ColorMode.Light);

  // Function to switch modes
  const toggleColorMode = React.useCallback(() => {
    setMode((prevMode) =>
      prevMode === ColorMode.Dark ? ColorMode.Light : ColorMode.Dark
    );
  }, []);

  // The value that will be passed to the context
  const contextValue = React.useMemo(
    () => ({
      mode,
      toggleColorMode,
    }),
    [mode, toggleColorMode]
  );

  // Choose the correct theme object based on the current mode
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
