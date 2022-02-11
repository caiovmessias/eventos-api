import { getRepository } from "typeorm";
import { Organizador } from "../../entities/Organizador";

interface IOrganizadoresRequest {
  id: number;
}

class DeleteOrganizadorService {
  async execute({ id }: IOrganizadoresRequest): Promise<Error | undefined> {

    const repo = getRepository(Organizador);

    const organizador = await repo.findOne(id);

    if(!organizador) {
      return new Error('Organizador Not Found');
    }

    await repo.delete(id);
  }
}

export { DeleteOrganizadorService };