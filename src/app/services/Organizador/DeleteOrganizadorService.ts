import { getRepository } from "typeorm";
import { Organizador } from "../../entities/Organizador";

interface IOrganizadorRequest {
  id: number;
}

class DeleteOrganizadorService {
  async execute({ id }: IOrganizadorRequest): Promise<Error | undefined> {

    const repo = getRepository(Organizador);

    const organizador = await repo.findOne(id);

    if(!organizador) {
      return new Error('Organizador Not Found');
    }

    await repo.delete(id);
  }
}

export { DeleteOrganizadorService };