import { getRepository } from "typeorm";
import { Organizador } from "../../entities/Organizador";

interface IOrganizadoresRequest {
  nome: string;
}

class CreateOrganizadorService {
  async execute({ nome }: IOrganizadoresRequest): Promise<Organizador | Error> {

    const repo = getRepository(Organizador);

    const organizadorAlreadyExists = await repo.findOne({nome});

    if (organizadorAlreadyExists) {
      return new Error('Organizador Already Exists');
    }

    const organizador = repo.create({
      nome
    });

    await repo.save(organizador);

    return organizador;

  }
}

export { CreateOrganizadorService }