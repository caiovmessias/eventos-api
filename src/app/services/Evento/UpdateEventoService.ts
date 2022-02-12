import { getRepository } from "typeorm";
import { Evento } from "../../entities/Evento";
import { LocaLEvento } from "../../entities/LocaLEvento";
import { Organizador } from "../../entities/Organizador";


interface IEventoRequest {
  id: number;
  nome?: string;
	id_local?: number;
	id_organizador?: number;
	status?: boolean;
}

class UpdateEventoService {
  async execute({ id, nome, status, id_local, id_organizador }: IEventoRequest): Promise<Evento | Error> {

    const repo = getRepository(Evento);

    const evento = await repo.findOne(id);

    if (!evento) {
      return new Error('Evento Not Found');
    }

    if(nome) {
      const eventoNome = await repo.findOne({nome});

      if(eventoNome) {
        return new Error('Nome already exists');
      }

      evento.nome = nome;
    }

    if(id_local) {
      const repoLocalEvento = getRepository(LocaLEvento);

      const localEventoAlreadyExists = await repoLocalEvento.findOne({id: id_local});

      if(!localEventoAlreadyExists) {
        return new Error(`Local Evento Not Found`);
      }

      evento.id_local = id_local;
    }

    if(id_organizador) {
      const repoOrganizador = getRepository(Organizador);

      const organizadorAlreadyExists = await repoOrganizador.findOne({id: id_organizador});

      if(!organizadorAlreadyExists) {
        return new Error(`Organizador Not Found`);
      }

      evento.id_organizador = id_organizador;
    }

    if(typeof status !== "undefined") {
      evento.status = status;
    }

    await repo.save(evento);

    return evento;

  }
}

export { UpdateEventoService }