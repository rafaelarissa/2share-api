import { Playlist } from ".prisma/client";
import { playlistRepository } from "../repositories/playlistRepository.js";

export type CreatePlaylistData = Omit<Playlist, "id">;

async function insert(createPlaylistData: CreatePlaylistData) {
  await playlistRepository.create(createPlaylistData);
}

export const playlistService = {
  insert,
};
