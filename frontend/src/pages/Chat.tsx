import { Box } from "@mui/material";
import SideBar from "../components/chat/SideBar";
import ChatWindow from "../components/chat/ChatWindow";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.isLoggedIn) {
      return navigate("/login");
    }
  }, [auth]);

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