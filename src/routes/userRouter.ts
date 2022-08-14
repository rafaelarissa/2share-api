import { userController } from "./../controllers/userController.js";
import { userSchema } from "./../schemas/userSchema.js";
import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";

const userRouter = Router();

userRouter.post(
  "/sign-up",
  validateSchemaMiddleware(userSchema),
  userController.signUp
);

userRouter.post(
  "/sign-in",
  validateSchemaMiddleware(userSchema),
  userController.signIn
);

export default userRouter;
