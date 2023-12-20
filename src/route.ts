import { Router } from "express";
import Controller from "./Controller";

const route = Router();

route.get("/", new Controller().GenerateRandomNumbers);

export default route;
