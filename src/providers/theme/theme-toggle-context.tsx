import React from 'react';

/**
 * The two modes we support
 */
export enum ColorMode {
  Light = 'light',
  Dark = 'dark',
}

/**
 * Structure of the data our context will provide
 */
interface ThemeToggleContextProps {
  mode: ColorMode;
  toggleColorMode: () => void;
}

/**
 * Create the context with default values
 */
export const ThemeToggleContext = React.createContext<ThemeToggleContextProps>({
  mode: ColorMode.Dark, // default mode
  toggleColorMode: () => {
    // default no-op
  },
});
