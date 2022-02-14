import { getRepository } from "typeorm";
import { Ingresso } from "../../entities/Ingresso";

interface IIngressoRequest {
  id: number;
}

class DeleteIngressoService {
  async execute({ id }: IIngressoRequest): Promise<void> {

    const repo = getRepository(Ingresso);

    await repo.delete(id);
  }
}

export { DeleteIngressoService };