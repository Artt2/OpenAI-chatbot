import { AppBar, Toolbar } from "@mui/material";
import { headerStyles } from "../styles/styles";
import Logo from "./common/Logo";

const Header = () => {
  return (
    <AppBar sx={headerStyles.appbar}>
      <Toolbar sx={headerStyles.toolbar}>
        <Logo />
      </Toolbar>
    </AppBar>
  )
};

export default Header;