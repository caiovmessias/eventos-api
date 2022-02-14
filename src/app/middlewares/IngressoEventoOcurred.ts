import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { DayJsData } from '../../helpers/DayJsData';
import { Evento } from '../entities/Evento';
import { Ingresso } from '../entities/Ingresso';


export async function IngressoEventoOcurred(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const id_ingresso = request.body.id_ingresso;

  const repoIngresso = getRepository(Ingresso);

  const ingresso = await repoIngresso.findOne({id: id_ingresso});

  if(!ingresso) {
    return response.status(400).json({ error: 'Ingresso Not Found' });
  }

  const id = ingresso.id_evento;
  
  const repo = getRepository(Evento);
  
  const evento = await repo.findOne({id});

  if(!evento) {
    return response.status(400).json({ error: 'Evento Not Found' });
  }
  
  const helperData = new DayJsData();
  const dateNow = helperData.dateNow();
  const compare = helperData.comparaHoras(
    dateNow,
    evento.data_hora_evento
  );

  if(compare < 1) {
    return response.status(400).json({ error: 'Evento Ocurred' });
  }

  return next();
}
