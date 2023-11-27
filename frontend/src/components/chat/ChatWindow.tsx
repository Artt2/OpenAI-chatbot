import { Box, Typography } from "@mui/material";
import ChatItem from "./ChatItem";
import { ChatRole } from "../../types";

const chatMessages = [
  { role: 'user', content: 'Hello!' },
  { role: 'assistant', content: 'Hi there! How can I help you today?' },
  { role: 'user', content: 'I need assistance with a tech issue.' },
  { role: 'assistant', content: 'Sure, Ill do my best to assist you. What seems to be the problem?' },
  { role: 'user', content: 'thanks!' },
  // Add more messages as needed
];

const ChatWindow = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: { md: 0.75, xs: 1, sm: 1},
        flexDirection: "column",
        //paddingX: 3,
      }}
    >
      <Typography
        sx={{
          fontSize: "34px",
          fontWeight: "600",
          color: "white",
          //marginBottom: 2,
        }}
      >
        Model - GPT 3.5 Turbo
      </Typography>
      <Box  //box for ChatItems
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "65vh",
          borderRadius: 3,
          mx: "auto",
          overflow: "scroll", //if content overflows, makes it scrollable
          overflowX: "hidden",
          overflowY: "auto",
          scrollBehavior: "smooth",
        }}
      >
        {chatMessages.map((chat, index) => (
          <ChatItem content={chat.content} role={chat.role as ChatRole} key={index} />
        ))}
      </Box>
      <Typography>Input somewhere here</Typography>

    </Box>
  );
};

export default ChatWindow;