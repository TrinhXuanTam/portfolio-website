import { createTheme } from '@mui/material/styles';
import commonTheme from '@/styles/themes/common';

const theme = createTheme(commonTheme, {
  palette: {
    mode: 'dark',
    primary: {
      main: '#16b573',
      light: '#10e08a',
      dark: '#088c56',
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
