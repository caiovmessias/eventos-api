import { getRepository } from "typeorm";
import { Organizador } from "../../entities/Organizador";

interface IOrganizadorRequest {
  id: number
}

class ListOrganizadorService {
  async execute({ id }: IOrganizadorRequest): Promise<Organizador | Error> {

    const repo = getRepository(Organizador);

    const organizador = await repo.findOne(id);

    if (!organizador) {
      return new Error('Organizador not found');
    }

    return organizador;

  }
}

export { ListOrganizadorService }