import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Evento } from '../entities/Evento';

export async function NomeEventoExists(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { nome } = request.body;
  
  const repo = getRepository(Evento);
  
  const eventoNome = await repo.findOne({nome});

  if(eventoNome) {
    return response.status(400).json({ error: 'Nome already exists' });
  }

  return next();
}
