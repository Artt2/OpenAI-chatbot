import { Button, Grid, Typography } from "@mui/material";
import FormInput from "../components/common/FormInput";
import { IoIosLogIn } from "react-icons/io";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    
    //TODO: handle login here

  };

  useEffect(() => {
    if (auth?.user) {
      return navigate("/chat");
    }
  }, [auth]);

  return (
    <Grid container alignItems="center" justifyContent="space-evenly">
      <Grid item 
        alignItems="center"
        display={{xs: "none", sm: "none", md: "flex"}} md={7}
        padding={8}
      >
        <img 
          src="openai.png"
          alt="login page image"
          width="100%"
        />
      </Grid>

      <Grid item 
        xs={12} sm={12} md={4}
        padding={8}
        container
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        sx={{boxShadow: "10px 10px 20px #000"}} //horizontal, vertical, blur, color
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography variant="h4">
            Log In
        </Typography>
        <FormInput 
          name="email"
          type="email"
          label="Email"
          autoFocus
        />
        <FormInput 
          name="password"
          type="password"
          label="Password"
        />
        <Button
          type="submit"
          fullWidth
          sx={{
            bgcolor: "#00fffc",
            mt: 1
            //":hover": {bgcolor: "white", color: "black"}
          }}
          endIcon={<IoIosLogIn />}
        >
          Log In
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;