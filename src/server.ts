import * as http from "http"
import * as handler from "./handler"
import * as constants from "./constants"

const server: http.Server = http.createServer(handler.main);
const port: number = handler.getPort()

server.listen(port, constants.hostname, () => {
  console.log(`Server running at http://${constants.hostname}:${port}/`);
});
