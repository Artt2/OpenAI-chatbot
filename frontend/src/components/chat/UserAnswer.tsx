import { Box, Typography, Avatar } from "@mui/material";
import { MessageBlocksType } from "../../types";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const UserAnswer = ({ messageBlocks } : { messageBlocks: MessageBlocksType}) => {
  const auth = useContext(AuthContext);

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#848884", //"#004d56",
        padding: 2,
        gap: 2,
        borderRadius: 2,
        my: 1 //marginY 1 only here, user always starts chat
      }}
    >
      <Avatar //user's name initial capitalized
        sx={{
          //mx: "auto", 
          bgcolor: "white",
          color: "black",
          fontWeight: 700,
        }}
      >
        {auth?.user?.name[0].toUpperCase()}
      </Avatar>
      <Box>
        {messageBlocks.map((block, index) => 
          <Typography sx={{ fontSize: "16px" }} key={index}>{block}</Typography>
        )}
      </Box>
    </Box>
  )
};

export default UserAnswer;