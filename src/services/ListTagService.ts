import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepository";

class ListTagService {
  async execute() {
    const tagRepository = getCustomRepository(TagRepository);

    const tags = await tagRepository.find();

    return tags;
  }
}

export { ListTagService };
