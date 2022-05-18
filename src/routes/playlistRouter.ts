import { Router } from "express";
import { playlistController } from "../controllers/playlistController.js";

const playlistRouter = Router();

playlistRouter.post("/playlist", playlistController.insert);
// playlistRouter.get("/");

export default playlistRouter;
