"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("./Config"));
const http_1 = __importDefault(require("http"));
const PORT = 0;
const server = http_1.default.createServer({}, Config_1.default);
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log("Server Ok");
});
