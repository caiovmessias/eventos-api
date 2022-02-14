import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Evento } from '../entities/Evento';

export async function EventoExists(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const id = request.body.id_evento !== undefined ? request.body.id_evento : request.params.id;

  const repo = getRepository(Evento);

  const evento = await repo.findOne(id);

  if(!evento) {
    return response.status(400).json({ error: 'Evento Not Found' });
  }

  return next();
}
