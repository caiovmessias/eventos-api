import { getRepository } from "typeorm";
import { Organizador } from "../../entities/Organizador";

interface IOrganizadorRequest {
  id: number;
  nome?: string;
  status?: boolean;
}

class UpdateOrganizadorService {
  async execute({ id, nome, status }: IOrganizadorRequest): Promise<Organizador | Error> {

    const repo = getRepository(Organizador);

    const organizador = await repo.findOne(id);

    if (!organizador) {
      return new Error('Organizador Not Found');
    }

    if(nome) {
      const organizadorNome = await repo.findOne({nome});

      if(organizadorNome) {
        return new Error('Nome already exists');
      }

      organizador.nome = nome;
    }

    if(typeof status !== "undefined") {
      organizador.status = status;
    }

    await repo.save(organizador);

    return organizador;

  }
}

export { UpdateOrganizadorService }