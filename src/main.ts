import "reflect-metadata";
import express from "express";
import { Express, Request, Response } from "express-serve-static-core";

import { createConnection } from "typeorm";

async function main(): Promise<void> {
  await createConnection();
  // @ts-ignore
  const server: Express = express();
  server.use(express.json());

  server.get(
    "/",
    (request: Request, response: Response): Response =>
      response.send("hello world")
  );

  await server.listen(((process.env.PORT as unknown) as number) || 3000);
  console.log(`Listening on PORT ${process.env.PORT || 3000} `);
}
main();
