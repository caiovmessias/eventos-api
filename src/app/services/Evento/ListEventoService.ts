import { getRepository } from "typeorm";
import { Evento } from "../../entities/Evento";

interface IEventoRequest {
  id: number
}

class ListEventoService {
  async execute({ id }: IEventoRequest): Promise<Evento | undefined> {

    const repo = getRepository(Evento);

    const evento = await repo.findOne({
      where: {
        id: id,
      },
      relations: ["organizador"],
    });

    return evento;

  }
}

export { ListEventoService }