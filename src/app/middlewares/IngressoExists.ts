import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Ingresso } from '../entities/Ingresso';

export async function IngressoExists(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const id = request.body.id_ingresso !== undefined ? request.body.id_ingresso : request.params.id;

  const repo = getRepository(Ingresso);

  const ingresso = await repo.findOne(id);

  if(!ingresso) {
    return response.status(400).json({ error: 'Ingresso Not Found' });
  }

  return next();
}
