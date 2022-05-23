import { prisma } from "../database.js";
import { CreatePlaylistData } from "../services/playlistService.js";

async function create(createPlaylistData: CreatePlaylistData) {
  await prisma.playlist.create({
    data: createPlaylistData,
  });
}

async function findMany() {
  return prisma.playlist.findMany();
}

export const playlistRepository = {
  create,
  findMany,
};
