import { getRepository } from "typeorm";
import { Usuario } from "../../entities/Usuario";

class ListAllUsuariosService {
  async execute(): Promise<Usuario[]> {

    const repo = getRepository(Usuario);

    const usuarios = await repo.find();

    return usuarios;

  }
}

export { ListAllUsuariosService }