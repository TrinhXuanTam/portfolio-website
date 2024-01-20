import { createTheme } from '@mui/material/styles';
import commonTheme from '@/styles/themes/common';

const theme = createTheme(commonTheme, {
  palette: {
    mode: 'dark',
    primary: {
      main: '#16b573',
      light: '#10e08a',
      dark: '#00663c',
      contrastText: 'white',
    },
    secondary: {
      main: '#f3632d',
      light: '#f55114',
      dark: '#873d22',
      contrastText: 'white',
    },
    background: {
      default: '#07111a',
      paper: '#0e1a24',
    },
    text: {
      primary: '#ffffff',
      main: '#ffffff',
    },
    action: {
      disabled: 'grey',
      disabledBackground: 'darkgrey',
    },
  },
  typography: {
    subtitle1: {
      color: '#959ca3',
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white',
          '&.Mui-disabled': {
            // Override for disabled state
            color: 'darkgrey', // Set your desired color for disabled labels
          },
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        color: 'text',
      },
    },
  },
});

export default theme;
