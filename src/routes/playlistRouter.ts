import { Router } from "express";
import { playlistController } from "../controllers/playlistController.js";

const playlistRouter = Router();

playlistRouter.post("/playlists", playlistController.insert);
playlistRouter.get("/playlists", playlistController.get);
playlistRouter.get("/playlist/:id", playlistController.getById);

export default playlistRouter;
