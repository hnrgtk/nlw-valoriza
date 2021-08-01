import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRepository";

class ListUserReceivedComplimentService {
  async execute(user_id: string) {
    const complimentRepository = getCustomRepository(ComplimentRepository);

    const compliments = complimentRepository.find({
      where: {
        user_receiver: user_id,
      },
      // relations: ["userSender", "userReceiver"],
    });

    return compliments;
  }
}

export { ListUserReceivedComplimentService };
