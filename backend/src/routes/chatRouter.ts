import { Router } from "express";
import { verifyToken } from "../utils/tokenManager.js";
import { validate, chatCompletionValidator } from "../utils/validators.js";
import { generateChatCompletion, sendChatsToUser } from "../controllers/chatController.js";

const chatRouter = Router();
chatRouter.post("/new", validate(chatCompletionValidator), verifyToken, generateChatCompletion);
chatRouter.get("/all-chats", verifyToken, sendChatsToUser);

export default chatRouter;