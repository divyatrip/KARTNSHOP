import { createTheme } from '@material-ui/core';

//const blue = "#0B7289"
//const orange = "#ffB460"

export default createTheme ({
    palette: {
        common:{
            blue: "#0B7289",
            orange: "#ffB460"
        },
    
    primary: {
        main: "#0B7289"
    },
    secondary: {
        main: "#ffB460"
    }
    },
    typography: {
        tab:{
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem"
        },
        signUp:{
            textTransform:"none",
            fontSize:"1rem",
            color:"white"
        }
    }
})