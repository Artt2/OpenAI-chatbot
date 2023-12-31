import { Router } from "express";
import { getAllUsers, userLogIn, userLogout, userSignUp, verifyUser } from "../controllers/userController.js";
import { loginValidator, signUpValidator, validate } from "../utils/validators.js";
import { verifyToken } from "../utils/tokenManager.js";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", validate(signUpValidator), userSignUp);
userRouter.post("/login", validate(loginValidator), userLogIn);
userRouter.get("/auth-status", verifyToken, verifyUser);
userRouter.get("/logout", verifyToken, userLogout);

export default userRouter;