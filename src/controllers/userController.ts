import { userService } from "./../services/userService";
import { Request, Response } from "express";

async function insert(req: Request, res: Response) {
  await userService.insert(req.body);

  res.sendStatus(201);
}

export const userController = {
  insert,
};
