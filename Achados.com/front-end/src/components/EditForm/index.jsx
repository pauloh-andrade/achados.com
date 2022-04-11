import {
	Grid,
	Button,
	Modal,
	Box,
	Typography,
	useTheme,
	FormControl,
	Icon,
	IconButton,
	useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HistoricService } from "../../services/api/historics/HistoricsService";
import { RequestService } from "../../services/api/requests/RequestsService";
import { FilledInput } from "../FilledInput";
import { FilledInputArea } from "../FilledInputArea";
import { Title2 } from "../Titles";

const EditForm = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down("sm"));

	const router = useRouter();
	const { id } = router.query;

	const [rows, setRows] = useState(null);

	const [name, setName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [dateTime, setDateTime] = useState("");
	const [description, setDescription] = useState("");

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [status, setStatus] = useState("");
	const handleChange = event => {
		setStatus(event.target.value);
	};

	useEffect(() => {
		if (router.isReady == true) {
			RequestService.getById(id).then(result => {
				if (result instanceof Error) {
					alert(result.message);
					return;
				}
				setName(result.name);
				setPhoneNumber(result.contact);
				setDateTime(result.date_time_loss);
				setDescription(result.description);
			});

			HistoricService.getAllByRquest(id).then(result => {
				if (result instanceof Error) {
					alert(result.message);
					return;
				}
				setRows(result);
			});
		}
	}, [id]);

	return (
		<>
			<Grid
				container
				width="100%"
				spacing={3}
				paddingLeft={smDown ? 0 : 4}
				paddingRight={smDown ? 0 : 4}
				marginLeft={-1}>
				<Grid item xs={12}>
					<Title2 title="Editar requisição" size={32} />
				</Grid>
				<Grid item xs={12}>
					<FilledInput
						holder="Nome completo"
						value={name}
						onChange={setName}
					/>
				</Grid>
				<Grid item xs={smDown ? 12 : 7}>
					<FilledInput
						holder="Telefone"
						value={phoneNumber}
						onChange={setPhoneNumber}
						mask="(00) 00000-0000"
					/>
				</Grid>
				<Grid item xs={smDown ? 12 : 5}>
					<FilledInput
						holder="Data"
						value={dateTime}
						onChange={setDateTime}
					/>
				</Grid>
				<Grid item xs={12} height={180}>
					<FilledInputArea
						value={description}
						onChange={setDescription}
						holder="Descreva o item perdido"
					/>
				</Grid>
				<Grid
					item
					xs={12}
					display="flex"
					justifyContent="flex-end"
					gap={3}>
					<Button
						sx={{
							fontSize: 20,
							textTransform: "capitalize",
							paddingLeft: 5,
							paddingRight: 5,
						}}
						variant="contained"
						color="secondary"
						size="large"
						onClick={handleOpen}>
						Histórico
					</Button>
					<Modal
						open={open}
						display="flex"
						justifyContent="center"
						alignItems="center"
						component={Box}>
						<Box
							width={smDown ? "100%" : theme.spacing(100)}
							height={smDown ? "100%" : theme.spacing(60)}
							backgroundColor="#fff"
							borderRadius={1}
							padding={3}
							display="flex"
							alignItems="flex-end"
							flexDirection="column">
							<Box width={theme.spacing(5)}>
								<IconButton onClick={handleClose}>
									<Icon>close</Icon>
								</IconButton>
							</Box>

							<Box
								width="100%"
								height={
									smDown
										? theme.spacing(30)
										: theme.spacing(18)
								}>
								{rows.map(row => (
									<Typography
										key={row.id_historic}
										fontFamily="poppins"
										fontWeight="500">
										{row.date_time} [Admin]
										{row.status == "SOLICITADO"
											? "Item foi solicitado"
											: ""}
										- Status {row.status}
									</Typography>
								))}
							</Box>
							<Box width="100%" height={theme.spacing(10)}>
								<Typography
									fontFamily="poppins"
									fontWeight="600">
									Adicionar Histórico
								</Typography>
								<FormControl
									variant="standard"
									sx={{ m: 1, minWidth: 200 }}>
									<select
										style={{
											border: 0,
											outline: "none",
											fontFamily: "poppins",
											fontSize: 18,
											cursor: "pointer",
										}}>
										<option>SOLICITADO</option>
										<option>EM ANALISE</option>
										<option>DEVOLVIDO</option>
										<option>RECUSADO</option>
									</select>
								</FormControl>
							</Box>
							<Box
								width="100%"
								height={
									smDown
										? theme.spacing(26)
										: theme.spacing(18)
								}>
								<FilledInputArea holder="Descrição" />
							</Box>
							<Box
								width="100%"
								height={theme.spacing(6)}
								display="flex"
								justifyContent="flex-end">
								<Button
									sx={{
										fontSize: 20,
										textTransform: "capitalize",
										paddingLeft: 5,
										paddingRight: 5,
									}}
									variant="contained"
									color="secondary"
									size="small">
									Adiocionar
								</Button>
							</Box>
						</Box>
					</Modal>
					<Button
						sx={{
							fontSize: 20,
							textTransform: "capitalize",
							paddingLeft: 5,
							paddingRight: 5,
						}}
						variant="contained"
						color="secondary"
						size="large">
						Atualizar
					</Button>
				</Grid>
			</Grid>
		</>
	);
};

export { EditForm };
