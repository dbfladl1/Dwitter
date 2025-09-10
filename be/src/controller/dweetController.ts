import * as dweetRepository from "../data/dweets";
import { Request, Response } from "express";

export async function getAll(req: Request, res: Response) {
  const userId = req.query.userId;
  const dweets = await (userId
    ? dweetRepository.getAllByUserId(userId as string)
    : dweetRepository.getAll());

  res.status(200).json(dweets);
}

export async function getById(req: Request, res: Response) {
  const id = req.params.id;
  const dweet = await dweetRepository.getById(id);

  if (dweet) {
    res.status(200).json(dweet);
  } else {
    res.status(404).json({ message: "id not found" });
  }
}


export async function addDweet(req: Request, res: Response) {
  const { text, name, userId } = req.body;
  const dweet = await dweetRepository.add(text, name, userId);

  res.status(201).json(dweet);
}

export async function updateDweet(req: Request, res: Response) {
  const id = req.params.id;
  const text = req.body.text;
  const dweet = await dweetRepository.update(id, text);
 
  if (dweet) {
    res.status(200).json(dweet);
  } else {
    res.status(404).json({ message: "id not found" });
  }
}

export async function deleteDweet(req: Request, res: Response) {
  const id = req.params.id;
  const success = await dweetRepository.remove(id);

  if (!success) {
    res.status(404).json({ message: "id not found" });
  } else {
    res.sendStatus(204);
  }
}   