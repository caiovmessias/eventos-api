import { Request, Response } from 'express';
import { DeleteIngressoService } from '../../services/Ingresso/DeleteIngressoService';


class DeleteIngressoController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const idConvertido = Number(id)

      const service = new DeleteIngressoService();

      await service.execute({ id: idConvertido });

      return response.status(200).json();
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { DeleteIngressoController }