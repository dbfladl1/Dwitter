import express from "express";
import "express-async-errors";
import * as dweetController from "../controller/dweetController";

const router = express.Router();

//Get / dweet
//Get / dweet?userId=userId
router.get("/", dweetController.getAll);

//Get / dweet/:id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const dweet = dweetController.getById(id);
  if (dweet) {
    res.status(200).json(dweet);
  } else {
    res.status(404).json({ message: "id not found" });
  }
});

//Post / dweet
router.post("/", (req, res, next) => {
  const { text, name, userId } = req.body;
  const dweet = dweetController.addDweet(text, name, userId);
  res.status(201).json(dweet);
});

//Put / dweet/:id
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const dweet = dweetController.updateDweet(id, text);
  if (dweet) {
    dweet.text = text;
    res.status(200).json(dweet);
  } else {
    res.status(404).json({ messege: "id not found" });
  }
});
//Delete / dweet/:id
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  const success = dweetController.remove(id);
  if (!success) {
    res.status(404).json({ message: "id not found" });
  } else {
    res.sendStatus(204);
  }
});

export default router;
