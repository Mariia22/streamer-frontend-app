import { createTheme } from '@mui/material/styles';

export const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#F4F5F4',
      light: '#FFFFFF',
      contrastText: '#FEBB00',
      dark: '#000000',
    },
  },
  typography: {
    fontFamily: ['Manrope', 'Arial'].join(','),
    fontSize: 16,
    h1: {
      fontSize: 32,
      fontWeight: 700,
    },
    h4: {
      fontSize: 20,
      fontWeight: 700,
    },
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
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      variants: [
        {
          props: { type: 'text' },
          style: {
            '& .MuiOutlinedInput-input': {
              paddingRight: '12px',
              paddingLeft: '12px',
            },
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          minWidth: '200px',
          minHeight: '45px',
          padding: '8px 16px',
          color: baseTheme.palette.primary.light,
          backgroundColor: baseTheme.palette.primary.contrastText,
          textAlign: 'center',
          border: 'none',
          borderRadius: '2px',
          boxShadow: 'none',
          marginTop: '20px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: baseTheme.palette.primary.contrastText,
            opacity: '70%',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
        },
      },
    },
  },
  palette: baseTheme.palette,
  typography: baseTheme.typography,
});

export default theme;
