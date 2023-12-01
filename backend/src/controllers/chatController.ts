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

export const sendChatsToUser = async (req: Request, res: Response) => {
  try {
    const id = res.locals.jwtData.id;
    //id is set as paylaod in tokenManager/createToken
    const user = await User.findById(id);
    
    //if user doesnt exist
    //or if user's id didnt match jwtData.id
    if (!user) {
      return res.status(401).send("User not registered OR Token malfunction");
    } else if (user._id.toString() !== id) {
      return res.status(401).send("ID from database didn't match with jwtData.id.")
    }

    //all good, return chats
    return res.status(200).json({ message: "OK", chats: user.chats });
  
  } catch(error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const deleteChats = async (req: Request, res: Response) => {
  try {
    const id = res.locals.jwtData.id;
    //id is set as paylaod in tokenManager/createToken
    const user = await User.findById(id);
    
    //if user doesnt exist
    //or if user's id didnt match jwtData.id
    if (!user) {
      return res.status(401).send("User not registered OR Token malfunction");
    } else if (user._id.toString() !== id) {
      return res.status(401).send("ID from database didn't match with jwtData.id.")
    }

    //@ts-ignore
    user.chats = [];  //clear chats
    await user.save();  //save to db

    return res.status(200).json({ message: "OK" });
  
  } catch(error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};