import { Request, Response } from "express";
import { ListUserSendComplimentService } from "../services/ListUserSendComplimentService";

class ListUserSendComplimentController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;
    const listUserSendComplimentService = new ListUserSendComplimentService();

    const compliments = await listUserSendComplimentService.execute(user_id);

    return res.json(compliments);
  }
}

export { ListUserSendComplimentController };
