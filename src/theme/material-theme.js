import { createTheme } from "@mui/material";

export const themeOptions = createTheme({
    
    palette: {
        primary: {
            main: '#4D7EA8',
            light: '#39d472',
            dark: '#3b5249',
            contrastText: '#FFFFFF'
        },
        background: {
            default: '#272932',
            paper: '#272932' 
        },
        text: {
            primary:'#ffffff',
            secondary:'#767676'
        },
        divider: '#292929'
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1800,
          xl: 1900,
          xxl: 2000,
        },
      },
})


  