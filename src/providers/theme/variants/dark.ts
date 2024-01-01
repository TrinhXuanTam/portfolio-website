import { createTheme } from '@mui/material/styles';
import commonTheme from '@/providers/theme/variants/common';

const theme = createTheme(commonTheme, {
  palette: {
    mode: 'dark',
    background: {
      default: '#07111a',
      paper: '#0e1a24',
    },
  },
});

export default theme;
