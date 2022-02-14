import { Request, Response } from 'express';
import { ListAllUsuariosService } from '../../services/Usuario/ListAllUsuariosService';

class ListAllUsuariosController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const service = new ListAllUsuariosService();

      const result = await service.execute();
      
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { ListAllUsuariosController }