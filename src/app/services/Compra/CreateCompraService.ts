import { getRepository } from "typeorm";
import { Compra } from "../../entities/Compra";

interface ICompraRequest {
  id_usuario: number;
  id_ingresso: number;
  quantidade: number;
  total_compra: number;
}

class CreateCompraService {
  async execute({ id_usuario, id_ingresso, quantidade, total_compra }: ICompraRequest): Promise<Compra> {

    const repo = getRepository(Compra);
    
    const compra = repo.create({
      id_usuario, 
      id_ingresso, 
      quantidade, 
      total_compra
    });

    await repo.save(compra);

    return compra;

  }
}

export { CreateCompraService }