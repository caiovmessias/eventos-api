import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Ingresso } from '../../entities/Ingresso';
import { CreateCompraService } from '../../services/Compra/CreateCompraService';

class CreateCompraController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id_ingresso, quantidade } = request.body;
    
      const service = new CreateCompraService();

      const { usuario } = request;
      const id_usuario = Number(usuario.id);

      const repo = getRepository(Ingresso);

      const ingresso = await repo.findOne({id: id_ingresso});

      if(!ingresso) {
        return response.status(400).json({ error: 'Ingresso Not Found' });
      }

      const total_compra = quantidade * ingresso.preco;

      const result = await service.execute({ id_ingresso, id_usuario, quantidade, total_compra });

      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { CreateCompraController }