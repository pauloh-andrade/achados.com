import { TextField } from "@mui/material";
import { IMask } from "../IMask";

const FilledInput = ({ holder, value, onChange, mask, size }) => {
	return (
		<TextField
			inputProps={{
				mask: mask,
				sx: {
					color: "primary.fontMain",
					fontFamily: "poppins",
					fontSize: 20,
					fontWeight: "500",
					borderBottom: 3,
					borderBottomColor: "secondary.main",
					outiline: "none",
					backgroundColor: "primary.background",
					borderTopLeftRadius: 4,
					borderTopRightRadius: 4,
					outline: 1,
					"&:before": {
						borderBottom: 1,
					},
				},
			}}
			InputProps={{
				inputComponent: IMask,
				sx: {
					"&:before": {
						borderBottom: 0,
					},
					"&:hover": {
						borderBottom: 0,
					},
					"&:hover:not(.Mui-disabled):before": {
						borderBottom: 0,
					},
				},
			}}
			InputLabelProps={{
				sx: {
					color: "secondary",
					fontFamily: "poppins",
					fontWeight: "500",
					fontSize: 20,
				},
			}}
			size="small"
			value={value}
			onChange={e => onChange(e.target.value)}
			color="secondary"
			variant="filled"
			label={holder}
			fullWidth
		/>
	);
};

export { FilledInput };
