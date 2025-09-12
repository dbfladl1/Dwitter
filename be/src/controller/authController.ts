import * as userRepository from "../data/auth";
import { Request, RequestHandler, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../interface/user";

const jwtSecretKey = "757774832747f38db3fa3f83a468f79a";
const jwtExpirationTime = "2d";
const bcryptSaltRounds = 10;

export function createJwtToken(userId: string) {
  return jwt.sign({ userId }, jwtSecretKey, {
    expiresIn: jwtExpirationTime,
  });
}

export async function login(req: Request, res: Response) {
  const { userId, password } = req.body;
  const user: User | undefined = await userRepository.findByUserId(userId);
  if (!user) {
    return res
      .status(401)
      .json({ message: "아이디 혹은 비밀번호를 다시 입력해주세요." });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res
      .status(401)
      .json({ message: "아이디 혹은 비밀번호를 다시 입력해주세요." });
  }

  const token = createJwtToken(userId);
  return res.status(200).json({ token, userId });
}

export async function signup(req: Request, res: Response) {
  const { userId, password, nickname, email, url } = req.body;
  const hashed = await bcrypt.hash(password, bcryptSaltRounds);
  const user: {
    userId: string;
    password: string;
    nickname: string;
    email: string;
    url?: string;
  } = { userId, password: hashed, nickname, email, url };
  const found = await userRepository.findByUserId(userId);
  if (found) {
    return res.status(409).json({ message: "이미 존재하는 아이디입니다." });
  }

  const createdUserId = await userRepository.createUser(user);
  const token = createJwtToken(createdUserId);

  return res.status(201).json({ token, userId });
}

export const me = async (req: Request, res: Response) => {
  const user = await userRepository.findByUserId(req.userId as any);

  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  return res.status(200).json({ token: req.token, userId: user.userId });
};
