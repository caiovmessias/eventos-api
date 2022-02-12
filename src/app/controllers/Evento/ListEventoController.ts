import { Request, Response } from 'express';
import { ListEventoService } from '../../services/Evento/ListEventoService';

class ListEventoController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const idConvertido = Number(id)

      const service = new ListEventoService()

      const result = await service.execute({ id: idConvertido });
      
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { ListEventoController }