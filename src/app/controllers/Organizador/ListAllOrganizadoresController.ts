import { Request, Response } from 'express';
import { ListAllOrganizadoresService } from '../../services/Organizador/ListAllOrganizadoresService';

class ListAllOrganizadoresController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const service = new ListAllOrganizadoresService();

      const result = await service.execute();
      
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { ListAllOrganizadoresController }