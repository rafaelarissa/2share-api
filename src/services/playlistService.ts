import { Playlist } from ".prisma/client";
import { playlistRepository } from "../repositories/playlistRepository.js";
import { notFoundError } from "../utils/errorUtils.js";
export type CreatePlaylistData = Omit<Playlist, "id">;

async function insert(createPlaylistData: CreatePlaylistData, userId: number) {
  await playlistRepository.create({ userId, ...createPlaylistData });
}

async function get(playlistId: number, userId: number) {
  const playlistPerUser = await validateUser(userId);

  if (playlistId) return getPlaylistById(playlistId, playlistPerUser);

  return [...playlistPerUser];
}

function getPlaylistById(playlistId: number, playlists: Playlist[]) {
  const playlist = playlists.filter((playlist) => playlist.id === playlistId);

  if (playlist.length === 0) throw notFoundError("Playlist not found");

  return playlist;
}

async function validateUser(id: number) {
  const playlists = await playlistRepository.getByUserId(id);

  if (playlists.length === 0)
    throw { type: "conflict", message: "Invalid user" };

  return playlists;
}

export const playlistService = {
  insert,
  get,
  getPlaylistById,
};
