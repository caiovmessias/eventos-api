import { getRepository } from "typeorm";
import { Ingresso } from "../../entities/Ingresso";

interface IIngresoRequest {
  nome: string;
  id_evento: number;
  preco: number;
  status: boolean;
}

class CreateIngressoService {
  async execute({ nome, id_evento, preco, status }: IIngresoRequest): Promise<Ingresso> {

    const repo = getRepository(Ingresso);
    
    const ingresso = repo.create({
      nome,
      id_evento, 
      preco,
      status,
    });

    await repo.save(ingresso);

    return ingresso;

  }
}

export { CreateIngressoService }