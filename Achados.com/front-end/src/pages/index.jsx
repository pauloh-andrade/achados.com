import { Box, Container, useTheme, useMediaQuery } from "@mui/material";
import { Logo } from "../../public/Icons";
import { Banner } from "../../public/Banner";
import { Title1, Subtitle } from "../components/Titles";
import { RequestForm } from "../components/RequestForm";
import { Footer } from "../layout/Footer";
import { Maps } from "../components/Maps";
import { useState } from "react";

const Home = () => {
	const theme = useTheme();

	const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
	const mdDown = useMediaQuery(theme.breakpoints.down("md"));
	const smDown = useMediaQuery(theme.breakpoints.down("sm"));

	const [longitude, setLongitude] = useState(null);
	const [latitude, setLatitude] = useState(null);

	const handlerMarkLocation = location => {
		setLongitude(location.lng());
		setLatitude(location.lat());
	};
	return (
		<Box display="flex" flexDirection="column" height="100vh">
			<Box width="100%" as="section" paddingBottom={5} display="flex">
				<Container
					maxWidth={mdDown ? "sm" : "xl"}
					sx={{ padding: theme.spacing(2) }}>
					<Box>
						<Logo
							width={
								smDown ? theme.spacing(20) : theme.spacing(30)
							}
						/>
					</Box>
					<Box
						width="100%"
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						sx={{
							flexWrap: mdDown ? "wrap" : "nowrap",
							marginTop: mdDown ? theme.spacing(5) : 0,
						}}>
						<Box
							width={theme.spacing(80)}
							display="flex"
							gap={5}
							flexDirection="column">
							<Title1
								title="Busque por seus pertences em nossos depósitos"
								size={lgDown ? (smDown ? 28 : 38) : 46}
							/>
							<Subtitle
								size={lgDown ? (smDown ? 16 : 18) : 24}
								color="primary.mainText"
								title="Registre as informações sobre seu pertence perdido
                para que possamos busca-lo."
							/>
						</Box>
						<Box
							width={theme.spacing(79)}
							display="flex"
							justifyContent="center">
							<Banner
								width={
									lgDown
										? smDown
											? theme.spacing(40)
											: theme.spacing(60)
										: theme.spacing(75)
								}
							/>
						</Box>
					</Box>
				</Container>
			</Box>
			<Box
				width="100%"
				backgroundColor="primary.main"
				as="section"
				display="flex">
				<Container
					maxWidth={mdDown ? "sm" : "xl"}
					sx={{
						padding: smDown ? theme.spacing(3) : theme.spacing(5),
						display: "flex",
						gap: 6,
						flexWrap: mdDown ? "wrap" : "nowrap",
					}}>
					<Box
						width={mdDown ? "100%" : "50%"}
						height={mdDown ? theme.spacing(40) : theme.spacing(55)}
						display="flex"
						alignItems="center">
						<Maps
							width="100%"
							height="100%"
							onSetLocation={handlerMarkLocation}
						/>
					</Box>
					<Box width={mdDown ? "100%" : "50%"}>
						<RequestForm
							latitude={latitude}
							longitude={longitude}
						/>
					</Box>
				</Container>
			</Box>
			<Footer flexGrow={1} />
		</Box>
	);
};

export default Home;
