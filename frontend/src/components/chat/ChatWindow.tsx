import { Box, IconButton, TextareaAutosize } from "@mui/material";
import { useContext, useLayoutEffect, useRef, useState } from "react";
import ChatItem from "./ChatItem";
import { ChatContextType, ChatRole, Message } from "../../types";
import { IoIosSend } from "react-icons/io";
import { getUserChats, sendChatRequest } from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { ChatContext } from "../../contexts/ChatContext";

//demo messages
const chatMessages0: Message[] = [
  { role: 'user', content: 'Hello!' },
  { role: 'assistant', content: 'Hi there! How can I help you today?' },
  { role: 'user', content: 'Give me some example JavaScript code.' },
  {
    role: 'assistant',
    //content: 'Sure, I\'ll do my best to assist you.```javascript\nconst test = () => {\n  return "testing";\n};```Is this good enough?',
    content: 'Sure, here are a few examples of JavaScript code:\n\n// Hello World\nconsole.log("Hello, World!");\n\n// Variables and Operations\nlet x = 5;\nlet y = 3;\nlet sum = x + y;\nconsole.log("The sum of x and y is: " + sum);\n\n// Conditional Statements\nlet temperature = 25;\nif (temperature > 30) {\n    console.log("It\'s hot outside!");\n} else if (temperature > 20) {\n    console.log("It\'s warm outside.");\n} else {\n    console.log("It\'s cold outside!");\n}\n\n// Loops\nfor (let i = 0; i < 5; i++) {\n    console.log("Count: " + i);\n}\n\n// Functions\nfunction greet(name) {\n    console.log("Hello, " + name + "!");\n}\ngreet("Alice");',
  },
  {
    role: 'user',
    content: 'Thanks!',
  },
  {
    role: 'assistant',
    content: "You're welcome! If you have any more questions or need further assistance, feel free to ask. Happy coding!",
  },
  // Add more messages as needed
];

const ChatWindow = () => {
  const auth = useContext(AuthContext);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  //const [chatMessages, setChatMessages] = useState<Message[]>([]); // for demomessages
  const { chatMessages, setChatMessages } = useContext(ChatContext) as ChatContextType;

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

  //runs before loading UI
  useLayoutEffect(() => {
    if (auth?.isLoggedIn && auth.user) {
      toast.loading("Loading Chats", { id: "loadchats" });
      getUserChats()
        .then((data) => {
          setChatMessages([...data.chats]);
          //setChatMessages(chatMessages0); //for demo messages
          toast.success("Successfully loaded chats", { id: "loadchats" });
        })
        .catch(error => {
          console.log(error);
          toast.error("Loading Failed", { id: "loadchats" });
        });
    }
  }, [auth]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevents adding a new line
      handleSubmit(); // Calls the function to send the message
    }
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
          onKeyDown={(e) => handleKeyPress(e)}
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