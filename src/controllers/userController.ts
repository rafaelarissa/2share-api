import { userService } from "./../services/userService";
import { Request, Response } from "express";

async function signUp(req: Request, res: Response) {
  await userService.signUp(req.body);

  res.sendStatus(201);
}

async function signIn(req: Request, res: Response) {
  const token = await userService.signIn(req.body);

  res.send({ token });
}

export const userController = {
  signUp,
  signIn,
};
