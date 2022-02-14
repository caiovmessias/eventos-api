import { getRepository } from "typeorm";
import { Evento } from "../../entities/Evento";


interface IEventoRequest {
  id: number;
  nome?: string;
	endereco?: string;
	id_organizador: number;
	status?: boolean;
}

class UpdateEventoService {
  async execute({ id, nome, status, endereco, id_organizador }: IEventoRequest): Promise<Evento | Error> {

    const repo = getRepository(Evento);

    const evento = await repo.findOne(id);

    if (!evento) {
      return new Error('Evento Not Found');
    }

    if(nome) {
      evento.nome = nome;
    }

    if(endereco) {
      evento.endereco = endereco;
    }

    if(id_organizador) {
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