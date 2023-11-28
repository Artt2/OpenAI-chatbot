import { ChatRole } from "../../types";
import AssistantAnswer from "./AssistantAnswer";
import UserAnswer from "./UserAnswer";
import { extractBlocks } from "../../utils/helpers";

const ChatItem = ({ content, role } : { content: string, role: ChatRole }) => {
  const messageBlocks = extractBlocks(content) as string[];

  return role == "assistant" ? (
    <AssistantAnswer messageBlocks={messageBlocks} />
  ) : (
    <UserAnswer messageBlocks={messageBlocks} />
  );
};

export default ChatItem;