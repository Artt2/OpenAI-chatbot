import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
config();

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", appRouter);

app.get("/ping", (_req, res) => {
  res.send("pong");
});

export default app;