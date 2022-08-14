import { prisma } from "../database.js";
import { CreateUserData } from "../services/userService.js";

async function create(createUserData: CreateUserData) {
  return prisma.user.create({
    data: createUserData,
  });
}

async function findById(id: number) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}

async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

async function findByUsername(username: string) {
  return prisma.user.findUnique({
    where: {
      username,
    },
  });
}

export const userRepository = {
  create,
  findById,
  findByEmail,
  findByUsername,
};
