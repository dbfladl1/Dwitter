import express from "express";
import "express-async-errors";

let dweets = [
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

//Get / dweet
//Get / dweet?userId=userId
router.get("/", (req, res, next) => {
  const userId = req.query.userId;
  const data = userId ? dweets.filter((d) => d.userId === userId) : dweets;

  res.status(200).json(data);
});

//Get / dweet/:id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const dweet = dweets.find((d) => d.id === id);
  if (dweet) {
    res.status(200).json(dweet);
  } else {
    res.status(404).json({ message: "id not found" });
  }
});

//Post / dweet
router.post("/", (req, res, next) => {
  const { text, name, userId } = req.body;
  const dweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date().toString(),
    profileUrl:
      "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
    name,
    userId,
  };
  dweets = [dweet, ...dweets];
  res.status(201).json(dweet);
});

//Put / dweet/:id
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;

  const dweet = dweets.find((d) => d.id === id);
  dweet && { ...dweet, text: req.body.text };
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
  dweets.filter((d) => d.id !== id);

  res.sendStatus(204);
});

export default router;
