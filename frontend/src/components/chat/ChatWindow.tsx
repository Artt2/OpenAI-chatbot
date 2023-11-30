import { Box, IconButton, TextareaAutosize } from "@mui/material";
import { useRef, useState } from "react";
import ChatItem from "./ChatItem";
import { ChatRole, Message } from "../../types";
import { IoIosSend } from "react-icons/io";
import { sendChatRequest } from "../../services/authService";

const chatMessages0: Message[] = [
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

  const [chatMessages, setChatMessages] = useState<Message[]>([]); //(chatMessages0)

  const handleSubmit = async () => {
    const content = inputRef.current?.value as string;  //get user input
    
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";  //clear the input field
    }

    const newMessage: Message = { role: "user", content };
    setChatMessages((prev) => [...prev, newMessage]); //new message added

    const chatData = await sendChatRequest(content);

    setChatMessages([...chatData.chats])
  };

  return (
    <Box
      sx={{
        display: "flex",
        flex: { md: 0.75, xs: 1, sm: 1},
        flexDirection: "column",
        //paddingX: 3,
        marginRight: 2,
        marginLeft: 2,
      }}
    >
      <Box  //box for ChatItems
        className="custom-scrollbar" //use a custom scrollbar
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "76vh",
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
          //margin: "auto",
          //marginTop: 5,
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        {" "}
        <TextareaAutosize
          className="custom-scrollbar"
          ref={inputRef}
          minRows={1}
          maxRows={3}
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            fontSize: '16px',
            fontFamily: 'Roboto Slab',
            fontWeight: 500,
            resize: 'none', // Disable resizing
            border: 'none',
            outline: 'none',
            marginLeft: 10,  //text doesnt start at the far left
            marginTop: "auto",  //these center the text vertically
            marginBottom: "auto",
          }}
        />
        <IconButton 
          onClick={handleSubmit} 
          sx={{ 
            color: "black", 
            fontSize: 30,
            width: "8%",
            borderRadius: "4px",
          }}>
          <IoIosSend />
        </IconButton>
      </div>

    </Box>
  );
};

export default ChatWindow;