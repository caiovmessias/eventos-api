import { Request, Response } from 'express';
import { UpdateIngressoService } from '../../services/Ingresso/UpdateIngressoService';

class UpdateIngressoController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { nome, status, id_evento, preco } = request.body;

      const idConvertido = Number(id);
    
      const service = new UpdateIngressoService();

      const result = await service.execute({ 
        id: idConvertido, 
        nome, 
        status,
        id_evento,
        preco
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

export { UpdateIngressoController }