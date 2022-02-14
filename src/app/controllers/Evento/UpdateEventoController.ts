import { Request, Response } from 'express';
import { UpdateEventoService } from '../../services/Evento/UpdateEventoService';


class UpdateEventoController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { nome, status, endereco, id_organizador } = request.body;

      const idConvertido = Number(id);
    
      const service = new UpdateEventoService();

      const result = await service.execute({ 
        id: idConvertido, 
        nome, 
        status,
        endereco,
        id_organizador
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

export { UpdateEventoController }