import { Box, Typography, Avatar } from "@mui/material";
import { MessageBlocksType } from "../../types";
import { RiRobot2Fill } from "react-icons/ri";
import { isCodeBlock } from "../../utils/helpers";
import { Prism } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const AssistantAnswer = ({ messageBlocks } : { messageBlocks: MessageBlocksType}) => {

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "rgb(17,29,39)",//"#b2beb5",//"#004d5612",
        padding: 2,
        gap: 2,
        borderRadius: 2,
        //my: 1
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
        <RiRobot2Fill />
      </Avatar>
      <Box>
        {messageBlocks.map((block, index) => 
          isCodeBlock(block) ? (
            <Prism style={coldarkDark} language="javascript" key={index}>
              {block}
            </Prism>
          ) : (
            <Typography sx={{ fontSize: "16px" }} key={index}>{block}</Typography>
          )
        )}
      </Box>
    </Box>
  );
};

export default AssistantAnswer;