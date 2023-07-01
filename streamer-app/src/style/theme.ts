import { createTheme } from '@mui/material/styles';

export const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#F4F5F4',
      light: '#FFFFFF',
      contrastText: '#FEBB00',
    },
  },
  typography: {
    fontFamily: ['Manrope', 'Arial'].join(','),
    fontSize: 16,
  },
});

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          boxSizing: 'border-box',
          fontFamily: baseTheme.typography.fontFamily,
          fontSize: baseTheme.typography.fontSize,
          width: '100%',
          height: '100%',
          margin: '0 auto',
          backgroundColor: baseTheme.palette.primary.contrastText,
        },
      },
    },
  },
  palette: baseTheme.palette,
  typography: baseTheme.typography,
});

export default theme;
