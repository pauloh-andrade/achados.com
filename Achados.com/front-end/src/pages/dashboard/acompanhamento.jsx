import { Box, useTheme, Container, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Maps } from "../../components/Maps";
import { RequestsTable } from "../../components/ResquestsTable";
import { Title2 } from "../../components/Titles";
import BaseDashboardLayout from "../../layout/baseDashboardLayout";

const Acompanhamento = () => {
	const theme = useTheme();
	const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
	const mdDown = useMediaQuery(theme.breakpoints.down("md"));
	const smDown = useMediaQuery(theme.breakpoints.down("sm"));

	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	return (
		<BaseDashboardLayout>
			<Container
				maxWidth={smDown ? "sm" : "xl"}
				sx={{
					padding: smDown ? theme.spacing(0) : theme.spacing(5),
					display: "flex",
					flexDirection: "column",
					gap: 6,
				}}>
				<Title2 title="Requisições de itens peridos" size={32} />
				<Box
					display="flex"
					gap={4}
					flexWrap={lgDown ? "wrap" : "nowrap"}>
					<Box
						width={lgDown ? "100%" : "50%"}
						display="flex"
						flexDirection="column"
						alignItems="center">
						<Maps
							width="100%"
							height={
								lgDown ? theme.spacing(30) : theme.spacing(50)
							}
						/>
					</Box>
					<Box
						width={lgDown ? "100%" : "50%"}
						display="flex"
						flexDirection="column"
						gap={3}>
						<RequestsTable />
					</Box>
				</Box>
			</Container>
		</BaseDashboardLayout>
	);
};

export default Acompanhamento;
