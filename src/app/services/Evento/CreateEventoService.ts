import { getRepository } from "typeorm";
import { Evento } from "../../entities/Evento";

interface IEventoRequest {
  nome: string;
  id_local: number;
  id_organizador: number;
  status: boolean;
}

class CreateEventoService {
  async execute({ nome, id_local, id_organizador, status }: IEventoRequest): Promise<Evento> {

    const repoEvento = getRepository(Evento);
    
    const eventoCreated = repoEvento.create({
      nome, 
      id_local, 
      id_organizador,
      status,
    });

    await repoEvento.save(eventoCreated);

    return eventoCreated;

  }
}

export { CreateEventoService }