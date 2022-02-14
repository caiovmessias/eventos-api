import { getRepository } from "typeorm";
import { Ingresso } from "../../entities/Ingresso";

interface IIngresoRequest {
  nome: string;
  id_evento: number;
  preco: number;
}

class CreateIngressoService {
  async execute({ nome, id_evento, preco }: IIngresoRequest): Promise<Ingresso> {

    const repo = getRepository(Ingresso);

    const ingresso = repo.create({
      nome,
      id_evento, 
      preco,
    });

    await repo.save(ingresso);

    return ingresso;

  }
}

export { CreateIngressoService }