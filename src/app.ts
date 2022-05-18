import cors from "cors";
import express from "express";
import "express-async-errors";
import "./setup.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import playlistRouter from "./routes/playlistRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(playlistRouter);
app.use(errorHandlerMiddleware);

export default app;
