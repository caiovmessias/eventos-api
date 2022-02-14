import { getRepository } from "typeorm";
import { Ingresso } from "../../entities/Ingresso";


interface IIngressoRequest {
  id: number;
  nome?: string;
  id_evento: number;
  preco?: number;
  status?: boolean;
}

class UpdateIngressoService {
  async execute({ id, nome, status, id_evento, preco }: IIngressoRequest): Promise<Ingresso | Error> {

    const repo = getRepository(Ingresso);

    const ingresso = await repo.findOne(id);

    if (!ingresso) {
      return new Error('Ingresso Not Found');
    }

    if(nome) {
      ingresso.nome = nome;
    }

    if(id_evento) {
      ingresso.id_evento = id_evento;
    }

    if(preco) {
      ingresso.preco = preco;
    }

    if(typeof status !== "undefined") {
      ingresso.status = status;
    }

    await repo.save(ingresso);

    return ingresso;

  }
}

export { UpdateIngressoService }