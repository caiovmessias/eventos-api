import { getRepository } from "typeorm";
import { Usuario } from "../../entities/Usuario";

interface IUsuarioRequest {
  id: number;
}

class DeleteUsuarioService {
  async execute({ id }: IUsuarioRequest): Promise<void> {

    const repo = getRepository(Usuario);

    await repo.delete(id);
  }
}

export { DeleteUsuarioService };