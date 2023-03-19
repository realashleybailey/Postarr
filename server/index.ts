import { Nitro } from "nitropack";

export default async (_nitroApp: Nitro) => {
  console.log("Nitro app is ready");
  console.log("Enviroment: " + process.env.NODE_ENV);
};
