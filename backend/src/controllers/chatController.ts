import { Request, Response, NextFunction } from "express";
import User from "../models/User.js";
import { configureOpenai } from "../config/openaiConfig.js";
import { OpenAIApi, ChatCompletionRequestMessage } from "openai";

/*
  calls openAI API with new message and returns all messages
*/
export const generateChatCompletion = async ( req: Request, res: Response, next: NextFunction) => {
  const { message } = req.body;
  
  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) return res.status(401).json({ message: "User not registered OR token malfcuntion" });

    //map chats to only contain role and content, for context of new message
    const chats = user.chats.map((user) => ({ 
      role: user.role, 
      content: user.content 
    })) as ChatCompletionRequestMessage[];

    chats.push({ content: message, role: "user" }); //chats for next message
    user.chats.push({ content: message, role: "user" });  //chats of user

    const config = configureOpenai();
    const openai = new OpenAIApi(config);

    const chatResponse = await openai.createChatCompletion({ 
      model: "gpt-3.5-turbo",
      messages: chats,
    });
    user.chats.push(chatResponse.data.choices[0].message);

    await user.save();  //save updated messages to databse
    return res.status(200).json({ chats: user.chats });

  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};