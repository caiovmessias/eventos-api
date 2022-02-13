import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { LocalEvento } from '../entities/LocalEvento';

export async function LocalEventoExists(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { id_local } = request.body;

  const repoLocalEvento = getRepository(LocalEvento);

  const localEventoAlreadyExists = await repoLocalEvento.findOne({id: id_local});

  if(!localEventoAlreadyExists) {
    return response.status(400).json({ error: 'Local Evento Not Found' });
  }

  return next();
}
