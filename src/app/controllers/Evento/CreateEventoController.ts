import { Request, Response } from 'express';
import { CreateEventoService } from '../../services/Evento/CreateEventoService';

class CreateEventoController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { nome, endereco, id_organizador, data_hora_evento } = request.body;
    
      const service = new CreateEventoService();

      const result = await service.execute({ nome, endereco, id_organizador, data_hora_evento });
      
      if(result instanceof Error) {
        return response.status(400).json({ error: result.message });  
      }

      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { CreateEventoController }