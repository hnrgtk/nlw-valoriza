import { Request, Response } from "express";
import { ListUserReceivedComplimentService } from "../services/ListUserReceivedComplimentService";

class ListUserReceivedComplimentController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;
    const listUserReceivedComplimentService = new ListUserReceivedComplimentService();

    const compliments = await listUserReceivedComplimentService.execute(user_id);

    return res.json(compliments);
  }
}

export { ListUserReceivedComplimentController };
