import * as http from "http"
import * as constants from "./constants"

function getPort() {
  var firstArg: Array<string> = process.argv.slice(2)[0].split("=");
  var port: number = 3000;

  if (firstArg.length == 1) {
    port = Number(firstArg[0]);
  }
  else if (firstArg.length == 2 && firstArg[0] == "port") {
    port = Number(firstArg[1]);
  }
  else {
    console.log(`Port number not specified, using default ${port}`);
  }

  return port
}

function serve(req: http.IncomingMessage, res: http.ServerResponse) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(constants.helloWorldMsg);
}

function main() {
  const server: http.Server = http.createServer(serve);
  var port: number = getPort()

  server.listen(port, constants.hostname, () => {
    console.log(`Server running at http://${constants.hostname}:${port}/`);
  });
}

main()
