import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { DayJsData } from '../../helpers/DayJsData';
import { Evento } from '../entities/Evento';


export async function EventoOcurred(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const id = request.body.id_evento !== undefined ? request.body.id_evento : request.params.id;
  
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
