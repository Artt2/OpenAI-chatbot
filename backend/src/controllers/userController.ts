import { Request, Response } from "express";
import User from "../models/User.js";
import { hash, compare } from "bcrypt";

const getAllUsers = async (req: Request, res: Response) => {
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
const userSignUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });  //find if this email has already signed up
    if (existingUser) return res.status(401).send("Email already in use")

    const hashedPassword = await hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    return res.status(201).json({ message: "OK", name: user.name, email: user.email });

  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: "ERROR", cause: error.message});
  }
};

const userLogIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {  //if user is not found
      return res.status(401).send("User not found");
    }

    const correctPassword = await compare(password, user.password);
    if (!correctPassword) return res.status(403).send("Incorrect password or email");

    return res.status(200).json({ message: "OK", name: user.name, email: user.email });

  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: "ERROR", cause: error.message});
  }
};

export { getAllUsers, userSignUp, userLogIn };