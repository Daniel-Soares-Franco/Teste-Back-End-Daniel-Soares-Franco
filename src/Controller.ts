import Service from "./Service";
import { Request, Response } from "express";
class Controller {
  public async GenerateRandomNumbers(req: Request, res: Response) {
    const RandomNumbers =
      await Service.Instance().generateRandomNumbers(192837465);
    res.json(RandomNumbers);
  }
}

export default Controller;
