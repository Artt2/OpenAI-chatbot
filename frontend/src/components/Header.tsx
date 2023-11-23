import { AppBar, Toolbar } from "@mui/material";
import { headerStyles } from "../styles/styles";
import Logo from "./common/Logo";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import NavigationLink from "./common/NavigationLink";

const Header = () => {
  const auth = useContext(AuthContext);

  return (
    <AppBar sx={headerStyles.appbar}>
      <Toolbar sx={headerStyles.toolbar}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                to="/chat"
                text="Go To Chat"
                bg="00fffc"
                textColor="black"
              />
              <NavigationLink
                to="/"
                text="Log Out"
                bg="#51538f"
                textColor="white"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavigationLink 
                to="/login"
                text="Log In"
                bg="#00fffc"
                textColor="black"
              />
              <NavigationLink 
                to="/signup"
                text="Sign Up"
                bg="#51538f"
                textColor="white"
              />
            </> 
          )}
        </div>
      </Toolbar>
    </AppBar>
  )
};

export default Header;