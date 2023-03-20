import { cwd } from "process";
import { join } from "path";
import { PrismaClient } from "@prisma/client";

const folder = process.env.NODE_ENV === "production" ? join(cwd(), "postarr.db") : join(cwd(), "server", "database", "postarr.db");

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
  datasources: {
    db: {
      url: "file:" + folder,
    },
  },
});

console.log("file:" + folder);

export default prisma;
