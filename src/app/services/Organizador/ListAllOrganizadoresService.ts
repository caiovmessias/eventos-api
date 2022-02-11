import { getRepository } from "typeorm";
import { Organizador } from "../../entities/Organizador";

class ListAllOrganizadoresService {
  async execute(): Promise<Organizador[]> {

    const repo = getRepository(Organizador);

    const organizadores = await repo.find();

    return organizadores;

  }
}

export { ListAllOrganizadoresService }