import { Request, Response } from "express";
import { playlistService } from "../services/playlistService.js";

async function insert(req: Request, res: Response) {
  await playlistService.insert(req.body);

  res.sendStatus(201);
}

async function addTrackToPlaylist(req: Request, res: Response) {
  const { playlistId } = req.params;

  await playlistService.addTrackToPlaylist(req.body);

  res.sendStatus(201);
}

async function get(req: Request, res: Response) {
  const playlists = await playlistService.get();
  res.send(playlists);
}

async function getById(req: Request, res: Response) {
  const { id } = req.params;

  const playlist = await playlistService.getPlaylistById(+id);

  res.send(playlist);
}

export const playlistController = {
  insert,
  get,
  getById,
  addTrackToPlaylist,
};
