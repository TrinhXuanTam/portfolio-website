'use client';

import React from 'react';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {
  ThemeToggleContext,
  ColorMode,
} from '@/providers/theme/theme-toggle-context';
import Button, { ButtonProps } from '@mui/material/Button';

export default function ThemeToggleIconButton(props: ButtonProps) {
  // Consume the current mode and toggle function from the context
  const { mode, toggleColorMode } = React.useContext(ThemeToggleContext);

  const handleClick = () => {
    toggleColorMode();
  };

  return (
    <IconButton {...props} color="inherit" onClick={handleClick}>
      {mode === ColorMode.Dark ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}
