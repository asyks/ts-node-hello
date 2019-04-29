import * as http from "http"
import * as constants from "./constants"

export function getPort() {
  var port: number = constants.defaultPort;

  var firstArg: Array<string> = []
  try {
    firstArg = process.argv.slice(2)[0].split("=");
  }
  catch (TypeError) {
    console.warn("Failed to parse args...");
  }

  if (firstArg.length == 2 && firstArg[0] == "port") {
    port = Number(firstArg[1]);
  }
  else {
    console.warn(`Port specified improperly, using default ${port}`);
  }

  return port
}

export function sendMsg(req: http.IncomingMessage, res: http.ServerResponse) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(constants.helloWorldMsg);
}
