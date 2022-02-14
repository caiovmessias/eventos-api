import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Usuario } from '../entities/Usuario';

export async function EmailUsuarioExists(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { email } = request.body;
  
  const repo = getRepository(Usuario);
  
  const usuarioEmail = await repo.findOne({email});

  if(usuarioEmail) {
    return response.status(400).json({ error: 'Email already exists' });
  }

  return next();
}
