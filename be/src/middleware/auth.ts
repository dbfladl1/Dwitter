import { Request, RequestHandler, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import * as userRepository from "../data/auth";

const AUTH_ERROR = { message: "Authentication Error" };
const AUTH_ERROR2 = { message: "Authentication Error2" };
const AUTH_ERROR3 = { message: "Authentication Error3" };

export const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.get("Authorization");
  console.log("auth",authHeader)
  if (!(authHeader && authHeader?.startsWith("Bearer "))) {
    return res.status(401).json(AUTH_ERROR3);
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(
    token,
    "757774832747f38db3fa3f83a468f79a",
    async (err, decoded) => {
      if (err) {
        console.log(err)
        return res.status(401).json(AUTH_ERROR);
      }
      let userId: string | undefined;
      if (typeof decoded === "object" && decoded !== null && "userId" in decoded) {
        userId = (decoded as any).userId;
      }
      const user = userId ? await userRepository.findByUserId(userId) : null;

      if (!user) {
        return res.status(401).json(AUTH_ERROR2);
      }
      req.userId = user.userId;
      next();
    }
  );
};
