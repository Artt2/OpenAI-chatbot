import { NextFunction, Request, Response } from "express";
import { ValidationChain, body, validationResult } from "express-validator";

const validate = ( validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {  //if any validation fails break out of the loop
        break;
      }
    }
    const errors = validationResult(req);
    if (errors.isEmpty()) { //if no errors
      return next();  //go to next
    }
    return res.status(422).json({ errors: errors.array() });
  };
};

const loginValidator = [
  body("email").trim().isEmail().withMessage("Email is required"),
  body("password")
    .trim()
    .isLength({ min: 6 })
    . withMessage("Password should contain at least 6 characters")
];

const signUpValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  ...loginValidator
];


export { validate, loginValidator, signUpValidator};