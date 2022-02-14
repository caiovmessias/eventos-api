import { getRepository } from "typeorm";
import { Organizador } from "../../entities/Organizador";

interface IOrganizadorRequest {
  nome: string;
}

class CreateOrganizadorService {
  async execute({ nome }: IOrganizadorRequest): Promise<Organizador> {

    const repo = getRepository(Organizador);

    const organizador = repo.create({
      nome
    });

    await repo.save(organizador);

    return organizador;

  }
}

export { CreateOrganizadorService }