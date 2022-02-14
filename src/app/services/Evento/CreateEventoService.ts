import { getRepository } from "typeorm";
import { Evento } from "../../entities/Evento";

interface IEventoRequest {
  nome: string;
  endereco: string;
  id_organizador: number;
  data_hora_evento: Date;
}

class CreateEventoService {
  async execute({ nome, endereco, id_organizador, data_hora_evento }: IEventoRequest): Promise<Evento> {

    const repoEvento = getRepository(Evento);
    
    const eventoCreated = repoEvento.create({
      nome, 
      endereco, 
      id_organizador,
      data_hora_evento,
    });

    await repoEvento.save(eventoCreated);

    return eventoCreated;

  }
}

export { CreateEventoService }