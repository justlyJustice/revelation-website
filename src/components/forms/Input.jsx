import { useFormikContext } from "formik";

import FormError from "./FormError";

const Input = ({ name, className, ...otherprops }) => {
  const { errors, touched, setFieldTouched, setFieldValue, values } =
    useFormikContext();

  return (
    <>
      <input
        name={name}
        onBlur={() => setFieldTouched(name)}
        onChange={(e) => setFieldValue(name, e.target.value)}
        className={className}
        value={values[name]}
        id={name}
        {...otherprops}
      />

      <FormError error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default Input;
