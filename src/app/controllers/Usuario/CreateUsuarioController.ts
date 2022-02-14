import { Request, Response } from 'express';
import { CreateUsuarioService } from '../../services/Usuario/CreateUsuarioService';

class CreateUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { nome, email, senha, data_nascimento, sexo } = request.body;
    
      const service = new CreateUsuarioService();

      const result = await service.execute({ nome, email, senha, data_nascimento, sexo });
      
      if(result instanceof Error) {
        return response.status(400).json({ error: result.message });  
      }

      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { CreateUsuarioController }