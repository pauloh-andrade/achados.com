import { TextField } from "@mui/material";

const FilledInputArea = ({ holder, onChange, value }) => {
	return (
		<TextField
			InputProps={{
				sx: {
					backgroundColor: "primary.background",
					borderBottom: 3,
					borderBottomColor: "secondary.main",
					"&:before": {
						borderBottom: 0,
						backgroundColor: "primary.background",
					},
					"&:hover": { backgroundColor: "primary.background" },
					"&:focus": { backgroundColor: "primary.background" },
					"&.Mui-focused": { backgroundColor: "primary.background" },
					"&.Mui-focused:after": { transform: "scaleX(0)" },
					"&:hover:not(.Mui-disabled):before": { borderBottom: 0 },
				},
			}}
			InputLabelProps={{
				sx: {
					fontFamily: "poppins",
					fontWeight: "500",
					fontSize: 20,
				},
			}}
			value={value}
			onChange={e => onChange(e.target.value)}
			color="secondary"
			variant="filled"
			label={holder}
			fullWidth
			multiline
			rows={4}
		/>
	);
};

export { FilledInputArea };
