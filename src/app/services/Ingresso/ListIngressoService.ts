import { getRepository } from "typeorm";
import { Ingresso } from "../../entities/Ingresso";

interface IIngressoRequest {
  id: number
}

class ListIngressoService {
  async execute({ id }: IIngressoRequest): Promise<Ingresso | undefined> {

    const repo = getRepository(Ingresso);

    const evento = await repo.findOne({
      where: {
        id: id,
      },
      relations: ["evento"],
    });

    return evento;

  }
}

export { ListIngressoService }