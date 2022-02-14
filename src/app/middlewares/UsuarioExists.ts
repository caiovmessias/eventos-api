import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Usuario } from '../entities/Usuario';

export async function UsuarioExists(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { id } = request.params;

  const repo = getRepository(Usuario);

  const usuario = await repo.findOne(id);

  if(!usuario) {
    return response.status(400).json({ error: 'Usuario Not Found' });
  }
  return next();
}
