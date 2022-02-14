import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Organizador } from '../entities/Organizador';


export async function NomeOrganizadorExists(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { nome } = request.body;
  
  const repo = getRepository(Organizador);
  
  const organizadorNome = await repo.findOne({nome});

  if(organizadorNome) {
    return response.status(400).json({ error: 'Nome already exists' });
  }

  return next();
}
