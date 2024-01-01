import { createTheme } from '@mui/material/styles';
import commonTheme from '@/styles/themes/common';

const theme = createTheme(commonTheme, {
  palette: {
    mode: 'dark',
    primary: {
      main: '#16b573',
      contrastText: 'white',
    },
    background: {
      default: '#07111a',
      paper: '#0e1a24',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: 'white',
      },
    },
  },
});

export default theme;
