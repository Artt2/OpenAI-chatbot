import { Grid, Typography } from "@mui/material";
import FormInput from "../components/common/FormInput";

const Login = () => {

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
      >
        <Typography variant="h4">
            Sign in
        </Typography>
        <FormInput 
          name="email"
          type="email"
          label="Email"
        />
        <FormInput 
          name="password"
          type="password"
          label="Password"
        />
      </Grid>
    </Grid>
  );
};

export default Login;