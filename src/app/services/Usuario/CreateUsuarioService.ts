import { getRepository } from "typeorm";
import { hash } from 'bcrypt';

import { Usuario } from "../../entities/Usuario";

interface IUsuarioRequest {
  nome: string;
  email: string;
  senha: string;
  data_nascimento: Date;
  sexo: string;
}

class CreateUsuarioService {
  async execute({ nome, email, senha, data_nascimento, sexo }: IUsuarioRequest): Promise<Usuario> {

    const repo = getRepository(Usuario);
    
    const senhaHash = await hash(senha, 8);

    const usuario = repo.create({
      nome, 
      email,
      senha: senhaHash,
      data_nascimento,
      sexo,
    });

    await repo.save(usuario);

    return usuario;
  }
}

export { CreateUsuarioService }