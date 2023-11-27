import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ChatRole } from "../../types";

const ChatItem = (
    { content, role } : { content: string, role: ChatRole }
  ) => {
  const auth = useContext(AuthContext);

  return (
    <div>{role}: {content}</div>
  )
};

export default ChatItem;