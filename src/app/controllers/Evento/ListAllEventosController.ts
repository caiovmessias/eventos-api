import { Request, Response } from 'express';
import { ListAllEventosService } from '../../services/Evento/ListAllEventosService';

class ListAllEventosController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const service = new ListAllEventosService();

      const result = await service.execute();
      
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { ListAllEventosController }