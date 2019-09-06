import load from "process-env-loader";
load();

import express from "express";
import { Express } from "express-serve-static-core";

import RateLimit from "express-rate-limit";

// @ts-ignore
import Mongoose from "./database/CreateConnection";

import { make_routes } from "./utils/MakeRoutes";
import { populate_db } from "../PopulateDB";

async function main(): Promise<void> {
  const server: Express = express();
  server.use(express.json());

  server.use(
    new RateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 1000 // limit each IP to 100 requests per windowMs
    })
  );

  make_routes(server);

  await populate_db();
  await server.listen(((process.env.PORT as unknown) as number) || 3000);
  console.log(`Listening on PORT ${process.env.PORT || 3000} `);
}
main();
