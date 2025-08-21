import { validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";

export const validate = (req: Request, res: Response, next:NextFunction) => {
    console.log("Validating request..!!.");
    console.log(req)
  const errors = validationResult(req);
  console.log(errors)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0].msg });
  }
  else{
    console.log("Validation passed.");
  }
  next();
};