import { Box, Typography, useTheme } from "@mui/material";

const Footer = () => {
	const theme = useTheme();
	return (
		<Box
			as="footer"
			display="flex"
			justifyContent="center"
			alignItems="center"
			backgroundColor="secondary.main"
			minHeight={theme.spacing(13)}
			flexGrow={1}>
			<Typography
				fontSize={16}
				fontFamily="poppins"
				fontWeight="300"
				color="primary.contrastText">
				Desenvolvido por Paulo Henrique
			</Typography>
		</Box>
	);
};

export { Footer };
