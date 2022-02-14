import { Request, Response } from 'express';
import { CreateIngressoService } from '../../services/Ingresso/CreateIngressoService';

class CreateIngressoController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { nome, id_evento, preco, status, } = request.body;
    
      const service = new CreateIngressoService();

      const result = await service.execute({ nome, id_evento, preco, status });

      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { CreateIngressoController }