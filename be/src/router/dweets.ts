import { body } from "express-validator";
import express from "express";
import "express-async-errors";
import * as dweetController from "../controller/dweetController";
import { validate } from "../middleware/validator";

const router = express.Router();

const checkDweetValidation = [
  body("text")
    .isLength({ min: 2 })
    .withMessage("이름은 두글자 이상 입력해주세요"),
  body("email").isEmail().withMessage("유효한 이메일을 입력해주세요"),
  validate,
];

//Get / dweet
//Get / dweet?userId=userId
router.get("/", dweetController.getAll);

//Get / dweet/:id
router.get("/:id", dweetController.getById);

//Post / dweet
router.post("/", checkDweetValidation, dweetController.addDweet);

//Put / dweet/:id
router.put("/:id", checkDweetValidation, dweetController.updateDweet);

//Delete / dweet/:id
router.delete("/:id", dweetController.deleteDweet);

export default router;
