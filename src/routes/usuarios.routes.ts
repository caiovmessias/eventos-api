import { Router } from 'express';
import { CreateUsuarioController } from '../app/controllers/Usuario/CreateUsuarioController';
import { DeleteUsuarioController } from '../app/controllers/Usuario/DeleteUsuarioController';
import { ListAllUsuariosController } from '../app/controllers/Usuario/ListAllUsuariosController';
import { ListUsuarioController } from '../app/controllers/Usuario/ListUsuarioController';
import { LoginUsuarioController } from '../app/controllers/Usuario/LoginUsuarioController';
import { UpdateUsuarioController } from '../app/controllers/Usuario/UpdateUsuarioController';
import { EmailUsuarioExists } from '../app/middlewares/EmailUsuarioExists';
import { UsuarioAutenticado } from '../app/middlewares/UsuarioAutenticado';
import { UsuarioExists } from '../app/middlewares/UsuarioExists';

const createUsuarioController = new CreateUsuarioController();
const listUsuarioController = new ListUsuarioController();
const updateUsuarioController = new UpdateUsuarioController();
const deleteUsuarioController = new DeleteUsuarioController();
const loginUsuarioController = new LoginUsuarioController();
const listAllUsuariosController = new ListAllUsuariosController();

const usuariosRoutes = Router();

usuariosRoutes.get('/:id', UsuarioExists, listUsuarioController.handle);
usuariosRoutes.get('/', listAllUsuariosController.handle);
usuariosRoutes.post('/', EmailUsuarioExists, createUsuarioController.handle);
usuariosRoutes.put('/:id', EmailUsuarioExists, UsuarioExists, UsuarioAutenticado, updateUsuarioController.handle);
usuariosRoutes.delete('/:id', UsuarioExists, deleteUsuarioController.handle);
usuariosRoutes.post('/login', loginUsuarioController.handle);

export { usuariosRoutes };