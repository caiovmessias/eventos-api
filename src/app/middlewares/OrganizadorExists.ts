import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Organizador } from '../entities/Organizador';

export async function OrganizadorExists(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const id = request.body.id_organizador !== undefined ? request.body.id_organizador : request.params.id;

  const repoOrganizador = getRepository(Organizador);

  const organizadorAlreadyExists = await repoOrganizador.findOne({id});

  if(!organizadorAlreadyExists) {
    return response.status(400).json({ error: 'Organizador Not Found' });
  }

  return next();
}
