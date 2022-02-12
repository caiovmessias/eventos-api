import { getRepository } from "typeorm";
import { Evento } from "../../entities/Evento";
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc';
import { Organizador } from "../../entities/Organizador";
import { LocaLEvento } from "../../entities/LocaLEvento";

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
    
    // Verifica se existe organizador
    const repoOrganizador = getRepository(Organizador);

    const organizadorAlreadyExists = await repoOrganizador.findOne({id: id_organizador});

    if(!organizadorAlreadyExists) {
      return new Error(`Organizador Not Found`);
    }
    

    // Verifica se existe Local Evento
    const repoLocalEvento = getRepository(LocaLEvento);

    const localEventoAlreadyExists = await repoLocalEvento.findOne({id: id_local});

    if(!localEventoAlreadyExists) {
      return new Error(`Local Evento Not Found`);
    }

    // Verifica se existe evento com o mesmo nome
    const eventoAlreadyExists = await repoEvento.findOne({nome});

    if (eventoAlreadyExists) {
      return new Error('Evento Already Exists');
    }
    
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