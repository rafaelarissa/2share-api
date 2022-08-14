import { userRepository } from "./../repositories/userRepository";
import { User } from "@prisma/client";

export type CreateUserData = Omit<User, "id">;

async function insert(createUserData: CreateUserData) {
  await userRepository.create(createUserData);
}

export const userService = {
  insert,
};
