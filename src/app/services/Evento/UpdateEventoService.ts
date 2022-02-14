import { getRepository } from "typeorm";
import { Evento } from "../../entities/Evento";


interface IEventoRequest {
  id: number;
  nome?: string;
	endereco?: string;
	id_organizador: number;
}

class UpdateEventoService {
  async execute({ id, nome, endereco, id_organizador }: IEventoRequest): Promise<Evento | Error> {

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

    await repo.save(evento);

    return evento;

  }
}

export { UpdateEventoService }