import express from "express";
import "express-async-errors";

let dwits = [
  {
    id: "1",
    text: "haha",
    createdAt: Date.now().toString(),
    profileUrl:
      "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
    name: "rimi",
    userId: "dbfladl1",
  },
  {
    id: "2",
    text: "haha2",
    createdAt: Date.now().toString(),
    profileUrl:
      "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
    name: "rimi",
    userId: "dbfladl2",
  },
];
const router = express.Router();

//Get / dwit
//Get / dwit?userId=userId
router.get("/", (req, res, next) => {
  const userId = req.query.userId;
  const data = userId ? dwits.filter((d) => d.userId === userId) : dwits;

  res.status(200).json(data);
});

//Get / dwit/:id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const dwit = dwits.find((d) => d.id === id);
  if (dwit) {
    res.status(200).json(dwit);
  } else {
    res.status(404).json({ message: "id not found" });
  }
});

//Post / dwit
router.post("/", (req, res, next) => {
  const { text, name, userId } = req.body;
  const dwit = {
    id: Date.now().toString(),
    text,
    createdAt: new Date().toString(),
    profileUrl:
      "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
    name,
    userId,
  };
  dwits = [dwit, ...dwits];
  res.status(201).json(dwit);
});

//Put / dwit/:id
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;

  const dwit = dwits.find((d) => d.id === id);
  dwit && { ...dwit, text: req.body.text };
  if (dwit) {
    dwit.text = text;
    res.status(200).json(dwit);
  } else {
    res.status(404).json({ messege: "id not found" });
  }
});
//Delete / dwit/:id
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  dwits.filter((d) => d.id !== id);

  res.sendStatus(204);
});

export default router;
