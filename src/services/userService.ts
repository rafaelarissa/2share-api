import { userRepository } from "./../repositories/userRepository";
import { User } from "@prisma/client";
import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../utils/errorUtils";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export type CreateUserData = Omit<User, "id">;

async function signUp(createUserData: CreateUserData) {
  const existingEmail = await userRepository.findByEmail(createUserData.email);
  const existingUsername = await userRepository.findByUsername(
    createUserData.username
  );
  if (existingEmail) throw conflictError("Email must be unique");
  if (existingUsername) throw conflictError("Username must be unique");

  const hashedPassword = bcrypt.hashSync(createUserData.password, 12);

  await userRepository.create({ ...createUserData, password: hashedPassword });
}

async function signIn(loginData: CreateUserData) {
  const user = await getUserOrFail(loginData);

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  return token;
}

async function findById(id: number) {
  const user = await userRepository.findById(id);
  if (!user) throw notFoundError("User not found");

  return user;
}

async function getUserOrFail(loginData: CreateUserData) {
  const user = await userRepository.findByEmail(loginData.email);
  if (!user) throw unauthorizedError("Invalid credentials");

  const isPasswordValid = bcrypt.compareSync(loginData.password, user.password);
  if (!isPasswordValid) throw unauthorizedError("Invalid credentials");

  return user;
}

export const userService = {
  signUp,
  signIn,
  findById,
};
