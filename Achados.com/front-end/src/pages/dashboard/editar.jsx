import { Container, Box, useTheme } from "@mui/material";
import { EditForm } from "../../components/EditForm";
import BaseDashboardLayout from "../../layout/baseDashboardLayout";

const Editar = () => {
	const theme = useTheme();
	return (
		<BaseDashboardLayout>
			<Container
				maxWidth="sm"
				sx={{
					paddingBottom: 5,
					paddingTop: 5,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Box width="100%">
					<EditForm />
				</Box>
			</Container>
		</BaseDashboardLayout>
	);
};

export default Editar;
