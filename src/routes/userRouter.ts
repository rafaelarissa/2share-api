import { userController } from "./../controllers/userController";
import { userSchema } from "./../schemas/userSchema";
import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";

const userRouter = Router();

userRouter.post(
  "/sign-up",
  validateSchemaMiddleware(userSchema),
  userController.insert
);
