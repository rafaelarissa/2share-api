import { Request, Response } from "express";
import { playlistService } from "../services/playlistService.js";
import { playlistSchema } from "../schemas/playlistSchema.js";
import { wrongSchemaError } from "../utils/errorUtils.js";

async function insert(req: Request, res: Response) {
  const validation = playlistSchema.validate(req.body);
  if (validation.error) {
    throw wrongSchemaError();
  }

  await playlistService.insert(req.body);

  res.sendStatus(201);
}

async function get(req: Request, res: Response) {
  const playlists = await playlistService.get();
  res.send(playlists);
}

export const playlistController = {
  insert,
  get,
};
