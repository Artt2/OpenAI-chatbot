import { TextField, TextFieldProps } from "@mui/material";
import { FormInputProps } from "../../types";

//FormInputProps requiredm other props can be added as well
const FormInput = (props: FormInputProps & TextFieldProps) => {
  const { name, label, type, ...otherProps } = props;
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name={name}
      label={label}
      type={type}
      {...otherProps}
      InputProps={{
        style: {
          color: "white"
        }
      }}
    />
  );
};

export default FormInput;