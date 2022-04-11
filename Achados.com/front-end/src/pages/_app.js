import "../styles/globals.css";
import AppThemeProvider from "../contexts/ThemeContext";

const MyApp = ({ Component, pageProps }) => {
	return (
		<AppThemeProvider>
			<Component {...pageProps} />
		</AppThemeProvider>
	);
};

export default MyApp;
