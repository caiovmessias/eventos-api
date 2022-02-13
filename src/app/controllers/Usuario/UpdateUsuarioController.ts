import { Request, Response } from 'express';
import { UpdateUsuarioService } from '../../services/Usuario/UpdateUsuarioService';

class UpdateUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { nome, email, senha, data_nascimento, sexo, status } = request.body;

      const idConvertido = Number(id);
    
      const service = new UpdateUsuarioService();

      const result = await service.execute({ 
        id: idConvertido, 
        nome,
        email, 
        senha, 
        data_nascimento, 
        sexo, 
        status
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

export { UpdateUsuarioController }