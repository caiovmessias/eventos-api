import { getRepository } from "typeorm";
import { Organizador } from "../../entities/Organizador";

interface IOrganizadorRequest {
  id: number;
  nome?: string;
}

class UpdateOrganizadorService {
  async execute({ id, nome }: IOrganizadorRequest): Promise<Organizador | Error> {

    const repo = getRepository(Organizador);

    const organizador = await repo.findOne(id);

    if (!organizador) {
      return new Error('Organizador Not Found');
    }

    if(nome) {
      organizador.nome = nome;
    }

    await repo.save(organizador);

    return organizador;
  }
}

export { UpdateOrganizadorService }