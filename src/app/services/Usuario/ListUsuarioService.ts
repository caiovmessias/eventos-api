import { getRepository } from "typeorm";
import { Usuario } from "../../entities/Usuario";


interface IUsuarioRequest {
  id: number
}

class ListUsuarioService {
  async execute({ id }: IUsuarioRequest): Promise<Usuario | undefined> {

    const repo = getRepository(Usuario);

    const usuario = await repo.findOne({id});

    return usuario;

  }
}

export { ListUsuarioService }