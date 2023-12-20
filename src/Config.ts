import route from "./route";
import express from "express";

var app = express();

app.use(express.json());

app.use("/", route);

export default app;
