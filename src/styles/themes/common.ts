import { createTheme } from '@mui/material/styles';
import roboto from '@/styles/fonts/roboto';

const theme = createTheme({
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'transparent',
        elevation: 0,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
  typography: {
    fontFamily: [roboto.style.fontFamily].join(','),
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
