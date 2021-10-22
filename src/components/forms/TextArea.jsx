import { useFormikContext } from "formik";
import FormError from "./FormError";

const TextArea = ({ name, ...otherProps }) => {
  const { touched, errors, setFieldTouched, setFieldValue, values } =
    useFormikContext();

  return (
    <>
      <textarea
        name={name}
        onBlur={() => setFieldTouched(name)}
        onChange={(e) => setFieldValue(name, e.target.value)}
        id={name}
        {...otherProps}
        value={values[name]}
      ></textarea>

      <FormError error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default TextArea;
