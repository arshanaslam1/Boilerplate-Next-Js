import { createTheme, StyledEngineProvider } from '@mui/material/styles';

/* need to use module augmentation for the theme to accept the value that just added */

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#282828',
      },
      secondary: {
        main: '#f4f2f2',
      },
    },
    typography: {
      fontFamily: 'Montserrat, __Montserrat_258d1f',
      fontWeightLight: 300,
      fontWeightBold: 800,
      fontWeightMedium: 500,
      fontWeightRegular: 400,
      h1: {
        fontSize: '64px',
        fontWeight: 800,
        lineHeight: 1.22,
        letterSpacing: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
      },
      h6: {
        fontSize: '24px',
        fontWeight: 500,
        lineHeight: 1.67,
        letterSpacing: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            padding: '10px',
          },
        },
      },
      MuiButton: {
        variants: [
          {
            props: { variant: 'text' },
            style: {
              borderRadius: 25,
              padding: '16px 30px',
              fontWeight: 'bold',
              fontSize: '14px',
            },
          },
          {
            props: { variant: 'contained' },
            style: {
              borderRadius: 25,
              padding: '16px 30px',
              fontWeight: 'bold',
              fontSize: '14px',
            },
          },
        ],
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 0,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            padding: '50px',
          },
        },
      },
    },
  },
  StyledEngineProvider
);

export default theme;
