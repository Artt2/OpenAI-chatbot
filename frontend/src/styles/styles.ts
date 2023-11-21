import { Theme, makeStyles } from "@mui/material";  //TODO: check correct import
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  appbar: {
    backgroundColor: "transparent",
    position: "static",
    boxShadow: "none",
  },
  toolbar: {
    display: "flex",
    color: theme.palette.primary

  }
}));

export default useStyles;