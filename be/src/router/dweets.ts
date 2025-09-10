import { body } from "express-validator";
import express from "express";
import "express-async-errors";
import * as dweetController from "../controller/dweetController";
import { validate } from "../middleware/validator";
import { isAuth } from "../middleware/auth";

const router = express.Router();


//Get / dweet
//Get / dweet?userId=userId
router.get("/", isAuth, dweetController.getAll);

//Get / dweet/:id
router.get("/:id", isAuth, dweetController.getById);

//Post / dweet
router.post("/", isAuth, dweetController.addDweet);

//Put / dweet/:id
router.put("/:id", isAuth, dweetController.updateDweet);

//Delete / dweet/:id
router.delete("/:id", isAuth, dweetController.deleteDweet);

export default router;
