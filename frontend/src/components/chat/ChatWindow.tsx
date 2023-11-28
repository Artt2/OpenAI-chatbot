import { Box, IconButton, Typography } from "@mui/material";
import ChatItem from "./ChatItem";
import { ChatRole } from "../../types";
import { IoIosSend } from "react-icons/io";

const chatMessages = [
  { role: 'user', content: 'Hello!' },
  { role: 'assistant', content: 'Hi there! How can I help you today?' },
  { role: 'user', content: 'Give me some example JavaScript code.' },
  {
    role: 'assistant',
    content: 'Sure, I\'ll do my best to assist you.```javascript\nconst test = () => {\n  return "testing";\n};```Is this good enough?',
  },
  {
    role: 'user',
    content: 'Thanks!',
  },
  {
    role: 'assistant',
    content: 'You\'re welcome!```javascript\n// Here\'s another example\nconst greeting = () => {\n  return "Hello, World!";\n};```Feel free to ask if you need more help!',
  },
  // Add more messages as needed
];

const ChatWindow = () => {

  const handleSubmit = () => {
    console.log("Sending new message");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flex: { md: 0.75, xs: 1, sm: 1},
        flexDirection: "column",
        //paddingX: 3,
        mx: 2
      }}
    >
      <Typography
        sx={{
          display: { xs: "none", sm: "none", md: "flex"}, //only visible on large screens
          fontSize: "34px",
          fontWeight: "600",
          color: "white",
          //marginBottom: 2,
        }}
      >
        Model - GPT 3.5 Turbo
      </Typography>
      <Box  //box for ChatItems
        className="custom-scrollbar" //use a custom scrollbar
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
          paddingRight: 1,  //padding on right to add gap between scrollbar
        }}
      >
        {chatMessages.map((chat, index) => (
          <ChatItem content={chat.content} role={chat.role as ChatRole} key={index} />
        ))}
      </Box>
      <Box>
        <IconButton 
          onClick={handleSubmit} 
          sx={{ 
            color: "white", 
            //mx: 1, 
            fontSize: 32,
          }}>
          <IoIosSend />
        </IconButton>
      </Box>

    </Box>
  );
};

export default ChatWindow;