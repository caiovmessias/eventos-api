import { getRepository } from "typeorm";
import { Usuario } from "../../entities/Usuario";

import { hash } from 'bcrypt'

interface IUsuarioRequest {
  id: number;
  nome?: string;
  email: string;
  senha?: string;
  data_nascimento?: Date;
  sexo?: string;
}

class UpdateUsuarioService {
  async execute({ id, nome, email, senha, data_nascimento, sexo }: IUsuarioRequest): Promise<Usuario | Error> {

    const repo = getRepository(Usuario);

    const usuario = await repo.findOne(id);

    if (!usuario) {
      return new Error('Usuario Not Found');
    }

    if(nome) {
      usuario.nome = nome;
    }

    if(email) {
      usuario.email = email;
    }

    if(senha) {
      const senhaHash = await hash(senha, 8);

      usuario.senha = senhaHash;
    }

    if(data_nascimento) {
      usuario.data_nascimento = data_nascimento;
    }

    if(sexo) {
      usuario.sexo = sexo;
    }

    await repo.save(usuario);

    return usuario;

  }
}

export { UpdateUsuarioService }