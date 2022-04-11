import {
	Pagination,
	Stack,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	useTheme,
	Icon,
	useMediaQuery,
	IconButton,
} from "@mui/material";
import { Cell } from "../Cell";
import { RequestService } from "../../services/api/requests/RequestsService";
import { useEffect, useState } from "react";
import { Edit } from "@mui/icons-material";
import { useRouter } from "next/router";

const RequestsTable = () => {
	const [rows, setRows] = useState([]);
	const router = useRouter();

	useEffect(() => {
		RequestService.getAll().then(result => {
			if (result instanceof Error) {
				alert(result.message);
				return;
			} else {
				console.log(result);

				setRows(result);
			}
		});
	}, []);

	const handleClickEditar = id => {
		router.push(`/dashboard/editar?id=${id}`);
	};

	const theme = useTheme();
	const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
	const mdDown = useMediaQuery(theme.breakpoints.down("md"));
	const smDown = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<>
			<TableContainer
				sx={{
					borderRadius: 1,
					backgroundColor: "#fff",
					width: lgDown ? "100%" : 600,
					overflowX: "hidden",
				}}>
				<Table
					sx={{
						minWidth: "100%",
						minHeight: 100,
					}}>
					<TableHead
						sx={{
							backgroundColor: "secondary.main",
						}}>
						<TableRow>
							<Cell>Nome</Cell>
							<Cell display={mdDown ? "none" : ""}>Contato</Cell>
							<Cell>Descrição</Cell>
							<Cell display={mdDown ? "none" : ""}>Data</Cell>
							<Cell></Cell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(row => (
							<TableRow key={row.id_request}>
								<Cell>{row.name}</Cell>
								<Cell display={mdDown ? "none" : ""}>
									{row.contact}
								</Cell>
								<Cell>{row.description}</Cell>
								<Cell display={mdDown ? "none" : ""}>
									{row.date_time_loss}
								</Cell>
								<Cell hidden="none">
									<IconButton
										onClick={() =>
											handleClickEditar(row.id_request)
										}
										children={<Edit />}
									/>
								</Cell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Stack spacing={2}>
				<Pagination count={10} variant="outlined" shape="rounded" />
			</Stack>
		</>
	);
};

export { RequestsTable };
