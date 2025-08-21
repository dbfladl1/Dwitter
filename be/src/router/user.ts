import { body, param, validationResult } from "express-validator";
import express, { NextFunction } from "express";
import { Request, Response } from "express";

const router = express.Router();

const validate = (req: Request, res: Response, next:NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0].msg });
  }
  next();
};

router.get(
  "/",
  [
    param("email")
      .trim()
      .isLength({ min: 2 })
      .isEmail()
      .normalizeEmail()
      .withMessage("이메일 형식으로 입력해주세요"),
    validate,
  ],
  (req: Request, res: Response) => {
    res.sendStatus(201);
  }
);

router.post(
  "/",
  [
    body("name")
      .isLength({ min: 2 })
      .withMessage("이름은 두글자 이상 입력해주세요"),
    body("email").isEmail().withMessage("유효한 이메일을 입력해주세요"),
    validate,
  ],
  (req: Request, res: Response) => {
    console.log("Dweet added:", "되고 잇어?");
    res.sendStatus(201);
    console.log("Dweet added:", "되고 잇어?");
  }
);

export default router;
