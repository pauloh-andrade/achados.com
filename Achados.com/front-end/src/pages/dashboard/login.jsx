import { Box, useTheme, Paper, Button } from "@mui/material";
import { Title2 } from "../../components/Titles";
import { FilledInput } from "../../components/FilledInput";
import { useState } from "react";
import BaseDashboardLayout from "../../layout/baseDashboardLayout";

const Login = () => {
	const theme = useTheme();
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	return (
		<BaseDashboardLayout>
			<Box
				display="flex"
				flexDirection="column"
				width={theme.spacing(50)}
				height={theme.spacing(44)}
				backgroundColor="#fff"
				component={Paper}
				elevation={1}
				padding={4}
				gap={2}>
				<Title2 title="Administração" />
				<FilledInput holder="Login" value={login} onChange={setLogin} />
				<FilledInput
					holder="Senha"
					value={password}
					onChange={setPassword}
				/>
				<Button
					variant="contained"
					color="secondary"
					sx={{
						marginTop: 3,
						textTransform: "capitalize",
					}}>
					Entrar
				</Button>
			</Box>
		</BaseDashboardLayout>
	);
};

export default Login;
