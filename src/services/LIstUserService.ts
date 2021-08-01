import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import { classToPlain } from "class-transformer";

class ListUserService {
  async execute() {
    const userRepository = getCustomRepository(UserRepository);

    const users = await userRepository.find();

    return classToPlain(users);
  }
}

export { ListUserService };
