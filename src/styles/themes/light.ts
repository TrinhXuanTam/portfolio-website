import { createTheme } from '@mui/material/styles';
import commonTheme from '@/styles/themes/common';

const theme = createTheme(commonTheme, {
  palette: {
    mode: 'light',
    primary: {
      main: '#3347c8', // Your primary “main” color
      light: '#3347c8', // Lighter variation of primary
      dark: '#3347c8', // Darker variation of primary
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FFC947', // Your secondary “main” color
      light: '#FFE49C', // Lighter variation of secondary
      dark: '#CC9F37', // Darker variation of secondary
      contrastText: '#015a63',
    },
    background: {
      default: '#f8fffe', // Page background
      paper: '#e9e9eb', // Container background (Paper components)
    },
    text: {
      primary: '#000000',
      secondary: '#5d5d5f', // You can add a “secondary” if you’d like
    },
  },
  typography: {
    subtitle1: {
      color: '#5d5d5f',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: 'text', // Could also use 'textPrimary' or 'textSecondary'
      },
    },
  },
});

export default theme;
