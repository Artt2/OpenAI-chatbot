import { Box, useMediaQuery, useTheme } from "@mui/material"
import TypingAnimation from "../components/TypingAnimation";
import Footer from "../components/Footer";

const Home = () => {
  const theme = useTheme();
  //whether the screen widht is below medium
  const isBelowMedium = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box  //outer box for home page
      width={"100%"} height={"100%"}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        <Box> 
          <TypingAnimation></TypingAnimation>
        </Box>
        <Box  //inner box for pics
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" }, //pics vertical on mobile
            gap: 5, //gap between pics
            my: 10, //marginY
          }}
        >
          <img //robot pic
            src="robot.png"
            alt="robot"
            style={{ width: "200px", margin: "auto", borderRadius: "90px" }}
          />
          <img  //spinning OpenAI logo
            className="image-inverted rotate"
            src="openai.png"
            alt="openai"
            style={{ width: "200px", margin: "auto" }}
          />
        </Box>
        <Box sx={{ display: "flex", mx: "auto" }}>
          <img
            src="chat.png"
            alt="chatbot"
            style={{
              display: "flex",
              margin: "auto",
              width: isBelowMedium ? "80%" : "60%",
              borderRadius: 20,
              boxShadow: "-5px -5px 105px #64f3d5",
              marginTop: 20,
              marginBottom: 20,
              padding: 10,
            }}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;