import { Typography } from "@mui/material";

const Title1 = ({ title, size }) => {
	return (
		<Typography
			fontSize={size}
			fontFamily="poppins"
			fontWeight="500"
			color="primary.mainText">
			{title}
		</Typography>
	);
};

export { Title1 };
