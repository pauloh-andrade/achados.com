import { TableCell, Typography } from "@mui/material";

const Cell = ({ children, display, hidden }) => {
	return (
		<TableCell
			sx={{
				minWidth: "10px",
				maxWidth: 135,
				display: display,
			}}>
			<Typography
				fontFamily="poppins"
				fontSize={15}
				color="primary.mainText"
				overflow={!hidden ? "hidden" : "none"}
				whiteSpace="nowrap"
				textOverflow="ellipsis">
				{children}
			</Typography>
		</TableCell>
	);
};

export { Cell };
