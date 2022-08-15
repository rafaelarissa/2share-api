import { userService } from "./../services/userService.js";
import { Request, Response } from "express";

async function signUp(req: Request, res: Response) {
  await userService.signUp(req.body);

  res.sendStatus(201);
}

async function signIn(req: Request, res: Response) {
  const token = await userService.signIn(req.body);

  res.send({ token }).status(200);
}

export const userController = {
  signUp,
  signIn,
};
