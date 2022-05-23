import { Playlist } from ".prisma/client";
import { playlistRepository } from "../repositories/playlistRepository.js";

export type CreatePlaylistData = Omit<Playlist, "id">;

async function insert(createPlaylistData: CreatePlaylistData) {
  await playlistRepository.create(createPlaylistData);
}

async function get() {
  return playlistRepository.findMany();
}

export const playlistService = {
  insert,
  get,
};
