import joi from "joi";
import { CreatePlaylistData } from "../services/playlistService.js";

export const playlistSchema = joi.object<CreatePlaylistData>({
  title: joi.string().required(),
  icon: joi.string(),
  description: joi.string(),
  createdAt: joi.date(),
});
