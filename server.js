const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./json_server/db.json");
const middlewares = jsonServer.defaults({ static: "./json_server/static" });
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log("JSON Server is running");
  console.log(port);
});