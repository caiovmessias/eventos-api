import { Request, Response } from 'express';
import { DeleteOrganizadorService } from '../../services/Organizador/DeleteOrganizadorService';

class DeleteOrganizadorController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const idConvertido = Number(id)

      const service = new DeleteOrganizadorService();

      const result = await service.execute({ id: idConvertido });
      
      if(result instanceof Error) {
        return response.status(400).json({ error: result.message });  
      }

      return response.status(200).json();
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { DeleteOrganizadorController }