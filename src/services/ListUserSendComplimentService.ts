import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRepository";

class ListUserSendComplimentService {
  async execute(user_id: string) {
    const complimentRepository = getCustomRepository(ComplimentRepository);

    const compliments = complimentRepository.find({
      where: {
        user_sender: user_id,
      },
      // relations: ["userSender", "userReceiver"],
    });

    return compliments;
  }
}

export { ListUserSendComplimentService };
