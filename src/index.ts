import app from "./Config";
import http from "http";

const PORT = 0;

const server = http.createServer({}, app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Server Ok");
});
