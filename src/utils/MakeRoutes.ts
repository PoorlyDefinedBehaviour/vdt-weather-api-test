import { readdirSync } from "fs";
import { join } from "path";

import { Express } from "express-serve-static-core";

export const make_routes = (server: Express): void => {
  const path: string = join(__dirname, "..", "http", "routes");

  const file_names: Array<string> = readdirSync(path).map(
    (name: string): string => name.split(".")[0]
  );

  for (const file of file_names) {
    const { router } = require(join(path, file));
    server.use("/api/v1/", router);
  }
};
