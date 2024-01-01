import { createTheme } from '@mui/material/styles';
import commonTheme from '@/styles/themes/common';

// TODO: define light theme
const theme = createTheme(commonTheme, {
  palette: {
    mode: 'light',
  },
});

export default theme;
