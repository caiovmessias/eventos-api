import { Request, Response } from 'express';
import { LoginUsuarioService } from '../../services/Usuario/LoginUsuarioService';

class LoginUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, senha } = request.body;

      const service = new LoginUsuarioService();

      const result = await service.execute({ email, senha });
      
      if(result instanceof Error) {
        return response.status(400).json({ error: result.message });  
      }

      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { LoginUsuarioController }