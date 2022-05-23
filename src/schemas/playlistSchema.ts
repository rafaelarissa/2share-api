import joi from "joi";
import { CreatePlaylistData } from "../services/playlistService.js";

export const playlistSchema = joi.object<CreatePlaylistData>({
  title: joi.string().required(),
  icon: joi.string().optional(),
  description: joi.string().optional(),
  createdAt: joi.date(),
});
