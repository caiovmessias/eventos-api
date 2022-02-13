import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { Usuario } from '../../entities/Usuario';

interface IRequest {
  email: string;
  senha: string;
}

interface IResponse {
  usuario: {
    nome: string;
    email: string;
  };
  token: string;
}

class LoginUsuarioService {
  async execute({ email, senha }: IRequest): Promise<IResponse | Error> {
    
    const repo = getRepository(Usuario);
  
    const usuario = await repo.findOne({email});
    
    if (!usuario) {
      return new Error('Usuario Not Found');
    }

    const passwordMatch = await compare(senha, usuario.senha);

    // Senha está correta
    if (!passwordMatch) {
      return new Error('Password incorrect');
    }

    // Gerar jsonwebtoken
    const token = sign({}, 'aa33256bbdaea0f5adbfae7f45249c03', {
      subject: usuario.id.toString(),
      expiresIn: '1d',
    });

    const tokenReturn: IResponse = {
      token,
      usuario: {
        nome: usuario.nome,
        email: usuario.email,
      },
    };

    return tokenReturn;
  }
}

export { LoginUsuarioService };
