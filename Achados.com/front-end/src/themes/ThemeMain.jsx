import { createTheme } from "@mui/material";

const ThemeMain = createTheme({
    palette: {
        primary:{
            main: "#8AD9D5",
            tertiary: "#2B6865",
            contrastText: "#ffffff",
            mainText: "#3B3952",
            background: "#E2F6F8",
        },
        secondary:{
            main: "#27908A",
            background: "#F4F4F4"
        }
    }
});

export default ThemeMain;