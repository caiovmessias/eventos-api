import { getRepository } from "typeorm";
import { Evento } from "../../entities/Evento";

interface IEventoRequest {
  id: number
}

class ListEventoService {
  async execute({ id }: IEventoRequest): Promise<Evento | Error> {

    const repo = getRepository(Evento);

    const evento = await repo.findOne({
      where: {
        id: id,
      },
      relations: ["localEvento", "organizador"],
    });

    if (!evento) {
      return new Error('Evento not found');
    }

    return evento;

  }
}

export { ListEventoService }