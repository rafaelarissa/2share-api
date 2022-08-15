import { Router } from "express";
import { playlistController } from "../controllers/playlistController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticated.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { playlistSchema } from "../schemas/playlistSchema.js";

const playlistRouter = Router();

playlistRouter.post(
  "/playlists",
  ensureAuthenticatedMiddleware,
  validateSchemaMiddleware(playlistSchema),
  playlistController.insert
);
playlistRouter.get(
  "/playlists",
  ensureAuthenticatedMiddleware,
  playlistController.get
);
playlistRouter.get(
  "/playlist/:id",
  ensureAuthenticatedMiddleware,
  playlistController.getById
);

export default playlistRouter;
