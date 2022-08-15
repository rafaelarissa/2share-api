import dotenv from "dotenv";
import jwt, { Secret } from "jsonwebtoken";
import { userService } from "../services/userService.js";
import { NextFunction, Request, Response } from "express";
import { unauthorizedError } from "../utils/errorUtils.js";
dotenv.config();

export async function ensureAuthenticatedMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers["authorization"];
  if (!authorization) throw unauthorizedError("authorization key");

  const token = authorization?.replace("Bearer ", "");
  if (!token) throw unauthorizedError("token");

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET as Secret) as {
      userId: number;
    };
    const user = await userService.findById(userId);
    res.locals.user = user;

    next();
  } catch {
    throw unauthorizedError("Invalid token");
  }
}
