import * as http from "http"

const hostname: string = "127.0.0.1";

function serve(req: http.IncomingMessage, res: http.ServerResponse) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
}

const server: http.Server = http.createServer(serve);

function main() {
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

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

}

main()
