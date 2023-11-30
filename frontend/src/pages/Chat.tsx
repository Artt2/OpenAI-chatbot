import { Box } from "@mui/material";
import SideBar from "../components/chat/SideBar";
import ChatWindow from "../components/chat/ChatWindow";

const Chat = () => {
  return (
    <Box  //outermost flex container
      sx={{
        display: "flex",
        flex: 1,  //fill all available space
        width: "100%",
        height: "100%",
        //mt: 3,
        gap: 3, //gap between flex items of this container
      }}
    >
    <SideBar />
    <ChatWindow />
    </Box>
  );
};

export default Chat;