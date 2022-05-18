import { prisma } from "../database.js";
import { CreatePlaylistData } from "../services/playlistService.js";

async function create(createPlaylistData: CreatePlaylistData) {
  await prisma.playlist.create({
    data: createPlaylistData,
  });
}

export const playlistRepository = {
  create,
};
