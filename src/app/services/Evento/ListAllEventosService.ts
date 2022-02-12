import { getRepository } from "typeorm";
import { Evento } from "../../entities/Evento";

class ListAllEventosService {
  async execute(): Promise<Evento[]> {

    const repo = getRepository(Evento);

    const eventos = await repo.find({
      relations: ["localEvento", "organizador"],
    });

    return eventos;

  }
}

export { ListAllEventosService }