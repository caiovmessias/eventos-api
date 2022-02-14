import { Request, Response } from 'express';
import { ListUsuarioService } from '../../services/Usuario/ListUsuarioService';

class ListUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const idConvertido = Number(id)

      const service = new ListUsuarioService();

      const result = await service.execute({ id: idConvertido });
      
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { ListUsuarioController }