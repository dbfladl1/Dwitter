import { Request, RequestHandler, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import * as userRepository from "../data/auth";

const AUTH_ERROR = { message: "Authentication Error" };

export const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.get("Authorization");
  if (!(authHeader && authHeader?.startsWith("Bearer "))) {
    return res.status(401).json(AUTH_ERROR);
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(
    token,
    "757774832747f38db3fa3f83a468f79a",
    async (err, decoded) => {
      if (err) {
        return res.status(401).json(AUTH_ERROR);
      }
      const user = await userRepository.findByUserId(decoded as any);

      if (!user) {
        return res.status(401).json(AUTH_ERROR);
      }
      req.userId = user.userId;
      next();
    }
  );
};
