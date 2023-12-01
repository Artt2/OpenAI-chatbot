import { createContext, ReactNode, useState } from "react"
import { ChatContextType, Message } from "../types"

const ChatContext = createContext<ChatContextType | null>(null);

const ChatProvider = ({ children } : { children: ReactNode }) => {
  const [chatMessages, setChatMessages] = useState<Message[]>([]);

  return (
    <ChatContext.Provider value={{ chatMessages, setChatMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };