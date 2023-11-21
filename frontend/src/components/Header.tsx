import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import useStyles from "../styles/styles";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolbar}></Toolbar>
    </AppBar>
  )
};

export default Header;