import { getRepository } from "typeorm";
import { Evento } from "../../entities/Evento";
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc';
import { Organizador } from "../../entities/Organizador";
import { LocalEvento } from "../../entities/LocalEvento";

interface IEventoRequest {
  nome: string;
  id_local: number;
  id_organizador: number;
  status: boolean;
}

dayjs.extend(utc);

class CreateEventoService {
  async execute({ nome, id_local, id_organizador, status }: IEventoRequest): Promise<Evento | Error> {

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