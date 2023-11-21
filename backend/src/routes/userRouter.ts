import { Router } from "express";
import { getAllUsers, userLogIn, userSignUp } from "../controllers/userController.js";
import { loginValidator, signUpValidator, validate } from "../utils/validators.js";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", validate(signUpValidator), userSignUp);
userRouter.post("/login", validate(loginValidator), userLogIn);

export default userRouter;