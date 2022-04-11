import { ThemeProvider } from "@mui/material";
import ThemeMain from "../themes/ThemeMain";

const AppThemeProvider = ({ children }) => {
	return <ThemeProvider theme={ThemeMain}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
