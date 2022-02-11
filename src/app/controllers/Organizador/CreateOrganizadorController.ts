import { Request, Response } from 'express';
import { CreateOrganizadorService } from '../../services/Organizador/CreateOrganizadorService';

class CreateOrganizadorController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { nome } = request.body;
    
      const service = new CreateOrganizadorService();

      const result = await service.execute({ nome });
      
      if(result instanceof Error) {
        return response.status(400).json({ error: result.message });  
      }

      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { CreateOrganizadorController }