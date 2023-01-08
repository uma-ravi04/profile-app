import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'arial,sans-serif'
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          fontSize: '0.8rem'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '0.8rem',
          fontFamily: 'arial,sans-serif'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.8rem',
          fontFamily: 'arial,sans-serif'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          marginTop: '25px',
          fontSize: "10px"
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          height: "90px",
          width: "90px",
          marginTop: "50px",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "22px",
          borderRadius: "10%"
        }
      }
    }
  }
});