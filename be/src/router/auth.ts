import { body, param, validationResult } from "express-validator";
import express from "express";
import { Request, Response } from "express";
import { validate } from "../middleware/validator";
import * as authController from "../controller/authController";
import { isAuth } from "../middleware/auth";

const router = express.Router();

const loginValidation = [
  body("userId")
    .trim()
    .isLength({ min: 3 })
    .withMessage("아이디는 세글자 이상 입력되어야 합니다."),
  body("password")
    .matches(/^\S+$/)
    .withMessage("비밀번호에 공백은 사용할 수 없습니다.")
    .isStrongPassword({
      minLength: 6,
      minLowercase: 1,
      minUppercase: 0,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage("비밀번호는 6자 이상, 숫자, 특수문자를 포함해야합니다."),
  validate,
];

const signupValidation = [
  ...loginValidation,
  body("nickname")
    .trim()
    .isLength({ min: 2 })
    .withMessage("닉네임은 두글자 이상 입력해주세요"),
  body("email")
    .trim()
    .isLength({ min: 2 })
    .isEmail()
    .normalizeEmail()
    .withMessage("이메일 형식으로 입력해주세요"),
  body("url")
    .isURL()
    .withMessage("URL 형식으로 입력해주세요")
    .optional({ nullable: true, checkFalsy: true }),
  validate,
];

router.get("checkId/:id/", (req: Request, res: Response) => {
  const id = req.params.id;
  if (id === "user01") {
    return res.status(400).json({ message: "이미 존재하는 아이디입니다." });
  } else {
    return res.status(200).json({ message: "사용 가능한 아이디입니다." });
  }
});

router.post("/login", loginValidation, authController.login);

router.post("/signup", signupValidation, authController.signup);

router.get("/me", isAuth, authController.me);

export default router;
