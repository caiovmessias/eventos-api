import { getRepository } from "typeorm";
import { Compra } from "../../entities/Compra";

interface ICompraRequest {
  id_usuario: number;
}

class ListIngressoUsuarioService {
  async execute({ id_usuario }: ICompraRequest): Promise<Compra[]> {

    const repo = getRepository(Compra);
    
    const ingressosComprados = repo.find({
      where: {
        id_usuario: id_usuario
      },
      relations: ["ingresso", "ingresso.evento"],
    });

    return ingressosComprados;
  }
}

export { ListIngressoUsuarioService }