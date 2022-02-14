import { getRepository } from "typeorm";
import { Organizador } from "../../entities/Organizador";

interface IOrganizadorRequest {
  id: number;
}

class DeleteOrganizadorService {
  async execute({ id }: IOrganizadorRequest): Promise<void> {

    const repo = getRepository(Organizador);

    await repo.delete(id);
  }
}

export { DeleteOrganizadorService };