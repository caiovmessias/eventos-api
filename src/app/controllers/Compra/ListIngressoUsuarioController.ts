import { Request, Response } from 'express';
import { ListIngressoUsuarioService } from '../../services/Compra/ListIngressoUsuarioService';

class ListIngressoUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { usuario } = request;
      const id_usuario = Number(usuario.id);
    
      const service = new ListIngressoUsuarioService()

      const result = await service.execute({ id_usuario });

      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { ListIngressoUsuarioController }