import { getRepository } from "typeorm";
import { Organizador } from "../../entities/Organizador";

interface IOrganizadorRequest {
  id: number
}

class ListOrganizadorService {
  async execute({ id }: IOrganizadorRequest): Promise<Organizador | undefined> {

    const repo = getRepository(Organizador);

    const organizador = await repo.findOne(id);

    return organizador;

  }
}

export { ListOrganizadorService }