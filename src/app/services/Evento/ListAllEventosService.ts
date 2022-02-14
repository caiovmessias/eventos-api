import { getRepository, MoreThanOrEqual } from "typeorm";
import { Evento } from "../../entities/Evento";

class ListAllEventosService {
  async execute(): Promise<Evento[]> {

    const repo = getRepository(Evento);

    const eventos = await repo.find({
      where: {
        data_hora_evento: MoreThanOrEqual('now()')
      },
      relations: ["organizador"],
    });

    return eventos;

  }
}

export { ListAllEventosService }