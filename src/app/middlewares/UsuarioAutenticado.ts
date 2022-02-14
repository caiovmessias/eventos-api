import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { Usuario } from '../entities/Usuario';

interface IPayload {
  sub: string;
}

export async function UsuarioAutenticado(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: 'Token Missing' });
  }

  try {
    const [, token] = authHeader.split(' ');

    const { sub: usuario_id } = verify(
      token,
      'aa33256bbdaea0f5adbfae7f45249c03',
    ) as IPayload;

    const repo = getRepository(Usuario);
  
    const usuario = await repo.findOne(usuario_id);

    if (!usuario) {
      return response.status(401).json({ error: 'Usuario Not Found' });
    }

    request.usuario = {
      id: usuario_id
    };

    return next();
  } catch {
    return response.status(401).json({ error: 'Invalid Token' });
  }
}
