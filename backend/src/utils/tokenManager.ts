import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { COOKIE_NAME_AUTH } from "./constants.js";

const createToken = (id: string, email: string, expiresIn: string) => {
  const payload = { id, email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn,
  });
  return token;
};

/*
  Verifys that token set in cookies is valid.
  Returns a Promise, which is an object that starts executing right away at creation
  Promise is resolved or rejected, after which the code that called verifyToken
  (with await syntax) can continue to proceed.

  If token is invalid or doesn't exist, returns 401.
  If valid, goes to verifyUser, which checks that user exists in DB for token.
*/
const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.signedCookies[`${COOKIE_NAME_AUTH}`];
  
  //if no token is found
  if (!token || token.trim() === "") {
    return res.status(401).json({ message: "Token not received" });
  }

  //return a promise based on validity of token
  return new Promise<void>((resolve, reject) => {
    //verify that set token is valid
    return jwt.verify(token, process.env.JWT_SECRET, (error, success) => {
      if (error) {
        reject(error.message);
        return res.status(401).json({ message: "Token Expired" });
      } else {
        resolve();
        res.locals.jwtData = success;
        return next();
      }
    });
  });
};

export { createToken, verifyToken };