import { Request, Response } from "express";
import User from "../models/User.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../utils/tokenManager.js";
import { COOKIE_NAME_AUTH } from "../utils/constants.js";

export const getAllUsers = async (req: Request, res: Response) => {
  User.find()
    .then((users) => {
      res.status(200).json({ users });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({message: "ERROR", cause: error.message});
    });
};
/*
  Data validation is done before in a middleware
*/
export const userSignUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });  //find if this email has already signed up
    if (existingUser) return res.status(401).send("Email already in use")

    const hashedPassword = await hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    //clears the cookie if the user logs in again
    //options specify that the exact cookie is being cleared
    res.clearCookie(COOKIE_NAME_AUTH, {
      path: "/",
      domain: "localhost",
      httpOnly: true,
      signed: true
    });

    //create a JWT token for the user that lasts 7 days
    const token = createToken(user._id.toString(), user.email, "7d");
    const expires = new Date();
    expires.setDate(expires.getDate() + 7); //a new date a week from now
    res.cookie(COOKIE_NAME_AUTH, token, {
      path: "/", //accessible on all paths
      domain: "localhost",  //domain
      expires,
      httpOnly: true, //only accessible via http requests (and not through cliend-side scripts)
      signed: true
    });

    return res.status(201).json({ message: "OK", name: user.name, email: user.email });

  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: "ERROR", cause: error.message});
  }
};

export const userLogIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {  //if user is not found
      return res.status(401).send("User not found");
    }

    const correctPassword = await compare(password, user.password);
    if (!correctPassword) return res.status(403).send("Incorrect password or email");

    //clears the cookie if the user logs in again
    //options specify that the exact cookie is being cleared
    res.clearCookie(COOKIE_NAME_AUTH, {
      path: "/",
      domain: "localhost",
      httpOnly: true,
      signed: true
    });

    //create a JWT token for the user that lasts 7 days
    const token = createToken(user._id.toString(), user.email, "7d");
    const expires = new Date();
    expires.setDate(expires.getDate() + 7); //a new date a week from now
    res.cookie(COOKIE_NAME_AUTH, token, {
      path: "/", //accessible on all paths
      domain: "localhost",  //domain
      expires,
      httpOnly: true, //only accessible via http requests (and not through cliend-side scripts)
      signed: true
    });

    return res.status(200).json({ message: "OK", name: user.name, email: user.email });

  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: "ERROR", cause: error.message});
  }
};

export const verifyUser = async (req: Request, res: Response) => {
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

    //all good, return name and email
    //returned to frontend services/authService/checkAuthStatus
    return res.status(200).json({ message: "OK", name: user.name, email: user.email });
  
  } catch(error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const userLogout = async (req: Request, res: Response) => {
  try {
    const id = res.locals.jwtData.id;

    const user = await User.findById(id);

    //if user doesnt exist
    //or if user's id didnt match jwtData.id
    if (!user) {
      return res.status(401).send("User not registered OR Token malfunction");
    } else if (user._id.toString() !== id) {
      return res.status(401).send("ID from database didn't match with jwtData.id.")
    }

    //all good, clearCookie
    res.clearCookie(COOKIE_NAME_AUTH, {
      httpOnly: true,
      domain: "localhost",
      signed: true,
      path: "/",
    });

    return res.status(200).json({ message: "OK", name: user.name, email: user.email });
  
  } catch(error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

