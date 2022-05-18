import { Request, Response } from "express";
import { playlistService } from "../services/playlistService.js";

async function insert(req: Request, res: Response) {
  await playlistService.insert(req.body);

  res.sendStatus(201);
}

export const playlistController = {
  insert,
};
