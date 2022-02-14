import { Request, Response } from 'express';
import { ListAllIngressosService } from '../../services/Ingresso/ListAllIngressosService';

class ListAllIngressosController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const service = new ListAllIngressosService()

      const result = await service.execute();
      
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { ListAllIngressosController }