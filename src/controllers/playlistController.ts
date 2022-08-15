import { Request, Response } from "express";
import { playlistService } from "../services/playlistService.js";

async function insert(req: Request, res: Response) {
  const userId = res.locals.user.id;

  await playlistService.insert(req.body, userId);

  res.sendStatus(201);
}

async function get(req: Request, res: Response) {
  const { id } = req.params;
  const userId = res.locals.user.id;

  const playlists = await playlistService.get(+id, userId);

  res.send(playlists);
}

export const playlistController = {
  insert,
  get,
};
