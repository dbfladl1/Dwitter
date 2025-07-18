"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const dwit = [
    {
        id: 1,
        text: "haha",
        createdAt: Date.now().toString,
        profileUrl: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
        name: "rimi",
        userId: "dbfladl1",
    },
    {
        id: 2,
        text: "haha2",
        createdAt: Date.now().toString,
        profileUrl: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
        name: "rimi",
        userId: "dbfladl1",
    },
];
const router = express_1.default.Router();
//Get / dwit
//Get / dwit?userId=userId
router.get("/", (req, res, next) => {
    const userId = req.query.userId;
    const data = userId ? dwit.filter((d) => d.userId === userId) : dwit;
    res.status(200).json(data);
});
//Get / dwit/:id
//Post / dwit
//Put / dwit/:id
//Delete / dwit/:id
exports.default = router;
