import { prisma } from "../database.js";
import { CreatePlaylistData } from "../services/playlistService.js";

async function create(createPlaylistData: CreatePlaylistData) {
  return prisma.playlist.create({
    data: createPlaylistData,
  });
}

async function findMany() {
  return prisma.playlist.findMany();
}

async function findById(id: number) {
  return prisma.playlist.findUnique({ where: { id } });
}

export const playlistRepository = {
  create,
  findMany,
  findById,
};
