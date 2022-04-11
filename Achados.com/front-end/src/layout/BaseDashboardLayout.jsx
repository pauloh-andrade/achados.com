import { Box, Button, Container, useMediaQuery, useTheme } from "@mui/material";
import { Footer } from "./Footer";
import { Logo } from "../../public/Icons";

const BaseDashboardLayout = ({ logout, children }) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<Box
			display="flex"
			flexDirection="column"
			height="100vh"
			backgroundColor="secondary.background"
			gap={10}>
			<Container
				maxWidth="xl"
				sx={{
					paddingTop: 2,
					display: "flex",
					flexDirection: "column",
					flexGrow: 8,
				}}>
				<Box display="flex" justifyContent="space-between">
					<Box>
						<Logo
							width={
								smDown ? theme.spacing(20) : theme.spacing(30)
							}
						/>
					</Box>
					<Box>
						<Button
							variant="contained"
							color="secondary"
							sx={{
								marginTop: 3,
								textTransform: "capitalize",
							}}>
							Logout
						</Button>
					</Box>
				</Box>
				<Box
					display="flex"
					flexGrow={1}
					justifyContent="center"
					alignItems="center">
					{children}
				</Box>
			</Container>
			<Footer />
		</Box>
	);
};

export default BaseDashboardLayout;
