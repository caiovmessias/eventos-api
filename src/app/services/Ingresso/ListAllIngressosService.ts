import { getRepository } from "typeorm";
import { Ingresso } from "../../entities/Ingresso";

class ListAllIngressosService {
  async execute(): Promise<Ingresso[]> {

    const repo = getRepository(Ingresso);

    const ingressos = await repo.find({
      relations: ["evento"],
    });

    return ingressos;

  }
}

export { ListAllIngressosService }