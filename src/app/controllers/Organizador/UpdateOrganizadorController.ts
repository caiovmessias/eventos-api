import { Request, Response } from 'express';
import { UpdateOrganizadorService } from '../../services/Organizador/UpdateOrganizadorService';

class UpdateOrganizadorController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { nome, status } = request.body;

      const idConvertido = Number(id);
    
      const service = new UpdateOrganizadorService();

      const result = await service.execute({ 
        id: idConvertido, 
        nome, 
        status 
      });
      
      if(result instanceof Error) {
        return response.status(400).json({ error: result.message });  
      }

      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { UpdateOrganizadorController }