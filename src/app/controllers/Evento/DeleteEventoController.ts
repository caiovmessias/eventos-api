import { Request, Response } from 'express';
import { DeleteEventoService } from '../../services/Evento/DeleteEventoService';


class DeleteEventoController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const idConvertido = Number(id)

      const service = new DeleteEventoService();

      await service.execute({ id: idConvertido });

      return response.status(200).json();
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { DeleteEventoController }