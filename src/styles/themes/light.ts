import { createTheme } from '@mui/material/styles';
import commonTheme from '@/styles/themes/common';

const theme = createTheme(commonTheme, {
  palette: {
    mode: 'light',
    primary: {
      main: '#e64c45', // Your primary “main” color
      light: '#ff7a70', // Lighter variation of primary
      dark: '#b32d2b', // Darker variation of primary
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6600ff', // Your secondary “main” color
      light: '#a066ff', // Lighter variation of secondary
      dark: '#3d00b2', // Darker variation of secondary
      contrastText: '#f8fffe',
    },
    background: {
      default: '#f8fffe', // Page background
      paper: '#e9e9eb', // Container background (Paper components)
    },
    text: {
      primary: '#000000',
      secondary: '#5d5d5f',
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
        color: 'text',
      },
    },
  },
});

export default theme;
