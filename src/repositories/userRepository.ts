import { prisma } from "../database";
import { CreateUserData } from "../services/userService";

async function create(createUserData: CreateUserData) {
  return prisma.user.create({
    data: createUserData,
  });
}

export const userRepository = {
  create,
};
