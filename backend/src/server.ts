import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db";
import { createApp } from "./app";

const startServer = async () => {
  dotenv.config({
    path: process.env.NODE_ENV === "development" ? ".env.dev" : ".env",
  });

  const PORT = process.env.PORT || 5001;
  const MONGO_URI = process.env.MONGODB_URI as string;
  const REDIS_HOST = process.env.REDIS_HOST as string;
  const REDIS_PORT = parseInt(process.env.REDIS_PORT as string);
  const REDIS_PASSWORD = process.env.REDIS_PASSWORD as string;

  await connectDB(MONGO_URI);
  const app = createApp(REDIS_HOST, REDIS_PORT, REDIS_PASSWORD);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
