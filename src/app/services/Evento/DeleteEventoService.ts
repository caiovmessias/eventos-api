import { getRepository } from "typeorm";
import { Evento } from "../../entities/Evento";

interface IEventoRequest {
  id: number;
}

class DeleteEventoService {
  async execute({ id }: IEventoRequest): Promise<void> {

    const repo = getRepository(Evento);

    await repo.delete(id);
  }
}

export { DeleteEventoService };