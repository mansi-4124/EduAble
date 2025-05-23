import Redis from "ioredis";

export const createRedisClient = (
  host: string,
  port: number,
  password: string
) => {
  const redis = new Redis({ host, port, password });

  redis.on("connect", () => console.log("Redis connected"));
  redis.on("error", (err) => console.error("Redis error", err));

  return redis;
};
