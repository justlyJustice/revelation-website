import { useFormikContext } from "formik";

const SubmitButton = ({ className, style, title, ...otherProps }) => {
	const { handleSubmit } = useFormikContext();

	return (
		<button
			type="button"
			className={className}
			onClick={handleSubmit}
			style={style}
			{...otherProps}
		>
			{title}
		</button>
	);
};

export default SubmitButton;
