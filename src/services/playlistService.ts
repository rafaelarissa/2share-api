import { Playlist } from ".prisma/client";
import { playlistRepository } from "../repositories/playlistRepository.js";
import { notFoundError } from "../utils/errorUtils.js";
export type CreatePlaylistData = Omit<Playlist, "id">;

async function insert(createPlaylistData: CreatePlaylistData) {
  await playlistRepository.create(createPlaylistData);
}

async function get() {
  return await playlistRepository.findMany();
}

async function getPlaylistById(id: number) {
  const playlist = await playlistRepository.findById(id);

  if (!playlist) throw notFoundError("Playlist not found");

  return playlist;
}

export const playlistService = {
  insert,
  get,
  getPlaylistById,
};
