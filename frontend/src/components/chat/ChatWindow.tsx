import { Box, IconButton, TextareaAutosize } from "@mui/material";
import { useRef } from "react";
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
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = () => {
    const content = inputRef.current?.value as string;
    console.log(content);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flex: { md: 0.75, xs: 1, sm: 1},
        flexDirection: "column",
        //paddingX: 3,
        marginRight: 2
      }}
    >
      <Box  //box for ChatItems
        className="custom-scrollbar" //use a custom scrollbar
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "78vh",
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
      <div
        style={{
          display: "flex",
          width: "100%",
          borderRadius: 8,
          backgroundColor: "white",
          margin: "auto",
        }}
      >
        {" "}
        <TextareaAutosize
          ref={inputRef}
          minRows={1}
          maxRows={4}
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            fontSize: '16px',
            fontFamily: 'Roboto Slab',
            fontWeight: 500,
            resize: 'none', // Disable resizing
            border: 'none',
            outline: 'none',
            marginLeft: 5,
            marginTop: "auto",
            marginBottom: "auto",
          }}
        />
        <IconButton 
          onClick={handleSubmit} 
          sx={{ 
            color: "black", 
            fontSize: 30,
            width: "10%"
          }}>
          <IoIosSend />
        </IconButton>
      </div>

    </Box>
  );
};

export default ChatWindow;