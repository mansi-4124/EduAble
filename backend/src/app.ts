import express from "express";
import { createRedisClient } from "./config/redis";
import { router as authRouter } from "./routes/auth";
const cors = require("cors");
export const createApp = (
  redisHost: string,
  redisPort: number,
  redisPassword: string
) => {
  const app = express();
  app.use(cors());
  const redis = createRedisClient(redisHost, redisPort, redisPassword);

  app.use((req, res, next) => {
    (req as any).redis = redis;
    next();
  });
  app.use(express.json());
  app.use("/auth", authRouter);
  app.use(
    (
      err: any,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      console.error(err.stack);
      res.status(500).send("Something went wrong!");
    }
  );

  return app;
};
