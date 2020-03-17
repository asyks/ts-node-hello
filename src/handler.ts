import * as http from "http"
import * as constants from "./constants"

export function getPort(): number {
  let port: number = constants.defaultPort;

  let firstArg: Array<string> = []
  try {
    firstArg = process.argv.slice(2)[0].split("=");
  }
  catch (TypeError) {
    console.warn("Failed to parse args...");
  }

  if (firstArg.length === 2 && firstArg[0] === "port") {
    port = Number(firstArg[1]);
  }
  else {
    console.warn(`Port specified improperly, using default ${port}`);
  }

  return port
}

export function main(req: http.IncomingMessage, res: http.ServerResponse): void {
  const validMethods: Array<string> = ["GET"]

  if (validMethods.includes(req.method.toUpperCase())) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    res.end("Hello World\n");
  }
  else {
    res.statusCode = 400;
    res.setHeader("Content-Type", "text/plain");

    res.end("Bad Request\n");
  }
}
