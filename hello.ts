import * as http from "http"
import * as constants from "./constants"

function serve(req: http.IncomingMessage, res: http.ServerResponse) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(constants.helloWorldMsg);
}

function getPort() {
  var args: Array<string> = process.argv.slice(2);
  var port: number = 3000;

  if (typeof args[0] == "string") {
    var spl: Array<string> = args[0].split("=");
    port = Number(spl[1]);
  }
  else if (typeof args[0] == "number") {
    port = Number(args[0]);
  }
  else {
    console.log(`Port number not specified, using default ${port}`);
  }

  return port
}

function main() {

  const server: http.Server = http.createServer(serve);
  var port: number = getPort()

  server.listen(port, constants.hostname, () => {
    console.log(`Server running at http://${constants.hostname}:${port}/`);
  });

}

main()
