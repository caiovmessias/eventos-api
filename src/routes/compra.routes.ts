import { Router } from 'express';
import { CreateCompraController } from '../app/controllers/Compra/CreateCompraController';
import { ListIngressoUsuarioController } from '../app/controllers/Compra/ListIngressoUsuarioController';
import { IngressoEventoOcurred } from '../app/middlewares/IngressoEventoOcurred';
import { IngressoExists } from '../app/middlewares/IngressoExists';
import { UsuarioAutenticado } from '../app/middlewares/UsuarioAutenticado';

const createCompraController = new CreateCompraController();
const listIngressoUsuarioController = new ListIngressoUsuarioController();

const compraRoutes = Router();

compraRoutes.post('/', UsuarioAutenticado, IngressoExists, IngressoEventoOcurred, createCompraController.handle);
compraRoutes.get('/ingressos', UsuarioAutenticado, listIngressoUsuarioController.handle);

export { compraRoutes };