import { Grid, Button, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { FilledInput } from "../FilledInput";
import { FilledInputArea } from "../FilledInputArea";
import { Title2 } from "../Titles";
import { RequestService } from "../../services/api/requests/RequestsService";

const RequestForm = ({ latitude, longitude }) => {
	const theme = useTheme();
	const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
	const smDown = useMediaQuery(theme.breakpoints.down("sm"));

	const [name, setName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [dateTime, setDateTime] = useState("");
	const [description, setDescription] = useState("");

	const createRequest = () => {
		RequestService.create({
			name,
			contact: phoneNumber,
			date_time_loss: dateTime,
			description,
			latitude,
			longitude,
		}).then(result => {
			if (result instanceof Error) {
				alert(result.message);
				return;
			} else {
				console.log(result);
			}
		});
	};

	return (
		<>
			<Grid
				container
				paddingLeft={smDown ? 0 : 4}
				paddingRight={smDown ? 0 : 4}
				spacing={3}>
				<Grid item xs={12}>
					<Title2
						title="Formulario de Requisição"
						size={lgDown ? (smDown ? 24 : 28) : 36}
					/>
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
						holder="Descreva o item perdido"
						value={description}
						onChange={setDescription}
					/>
				</Grid>
				<Grid item xs={12} display="flex" justifyContent="flex-end">
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
						onClick={createRequest}>
						Registrar
					</Button>
				</Grid>
			</Grid>
		</>
	);
};

export { RequestForm };
