import { getRepository } from "typeorm";
import { Evento } from "../../entities/Evento";

interface IEventoRequest {
  id: number;
}

class DeleteEventoService {
  async execute({ id }: IEventoRequest): Promise<Error | undefined> {

    const repo = getRepository(Evento);

    const evento = await repo.findOne(id);

    if(!evento) {
      return new Error('Evento Not Found');
    }

    await repo.delete(id);
  }
}

export { DeleteEventoService };