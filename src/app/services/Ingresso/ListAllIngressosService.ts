import { getRepository, MoreThanOrEqual } from "typeorm";
import { Ingresso } from "../../entities/Ingresso";

class ListAllIngressosService {
  async execute(): Promise<Ingresso[]> {

    const repo = getRepository(Ingresso);

    const ingressos = await repo.find({
      where: {
        evento: { data_hora_evento: MoreThanOrEqual('now()') },
    },
      relations: ["evento"],
    });

    return ingressos;

  }
}

export { ListAllIngressosService }