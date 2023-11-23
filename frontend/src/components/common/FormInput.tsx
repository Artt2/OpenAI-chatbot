import { TextField } from "@mui/material";
import { FormInputProps } from "../../types";

const FormInput = (props: FormInputProps) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name={props.name}
      label={props.label}
      type={props.type}
    />
  );
};

export default FormInput;