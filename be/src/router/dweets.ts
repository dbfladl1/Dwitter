import express from "express";
import "express-async-errors";
import * as dweetController from "../controller/dweetController";

const router = express.Router();

//Get / dweet
//Get / dweet?userId=userId
router.get("/", dweetController.getAll);

//Get / dweet/:id
router.get("/:id", dweetController.getById);

//Post / dweet
router.post("/", dweetController.addDweet);

//Put / dweet/:id
router.put("/:id", dweetController.updateDweet);

//Delete / dweet/:id
router.delete("/:id", dweetController.deleteDweet);

export default router;
