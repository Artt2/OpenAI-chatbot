import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div 
      style={{
        display: "flex",  //flex-container
        marginRight: "auto",  //empty margin (space) on the right, leaves space for components (pushed left)
        alignItems: "center", //vertical as flex-direction is "row" by default
        gap: "15px",  //horizontal and vertical gap
        }}
    >
      <Link to={"/"}>
        <img 
          src="openai.png" 
          alt="openai logo" 
          width={"30px"}
          height={"30px"}
          className="image-inverted"  //inverts colors
        />
      </Link>{" "}
      <Typography
        sx={{
          display: { md: "block", sm: "none", xs: "none" }, //medium screens it is shown, as a block-level element
          margin: "auto", //centers horizontally 
          fontWeight: "800",  //bold
          textShadow: "2px 2px 20px #000",  //horizontal and vertical offset, blur raidus, color of shadow
        }}
      >
        <span style={{fontSize: "20px" }}>MERN</span>-GPT
      </Typography>
    </div>
  );
};

export default Logo;