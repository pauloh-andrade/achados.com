import { forwardRef } from "react";
import { IMaskInput } from "react-imask";

const IMask = forwardRef(function IMask(props, ref) {
	const { ...other } = props;
	return (
		<IMaskInput
			{...other}
			mask={props.mask}
			definitions={{
				"#": /[1-9]/,
			}}
			inputRef={ref}
			overwrite
		/>
	);
});

export { IMask };
