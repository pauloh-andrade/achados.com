import { Typography } from "@mui/material";

const Subtitle = ({ title, color, size }) => {
	return (
		<Typography
			fontSize={size}
			fontFamily="poppins"
			fontWeight="400"
			color={color}>
			{title}
		</Typography>
	);
};

export { Subtitle };
