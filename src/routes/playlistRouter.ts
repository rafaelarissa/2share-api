import { Router } from "express";
import { playlistController } from "../controllers/playlistController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { playlistSchema } from "../schemas/playlistSchema.js";

const playlistRouter = Router();

playlistRouter.post(
  "/playlists",
  validateSchemaMiddleware(playlistSchema),
  playlistController.insert
);
playlistRouter.get("/playlists", playlistController.get);
playlistRouter.get("/playlist/:id", playlistController.getById);
playlistRouter.post("/playlist/:id", playlistController.addTrackToPlaylist);

export default playlistRouter;
