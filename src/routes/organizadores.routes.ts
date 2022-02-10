import { Router } from 'express';
import { CreateOrganizadorController } from '../app/controllers/Organizador/CreateOrganizadorController';
import { ListAllOrganizadoresController } from '../app/controllers/Organizador/ListAllOrganizadoresController';


const organizadoresRoutes = Router();

const listAllOrganizadoresController = new ListAllOrganizadoresController();
const createOrganizadorController = new CreateOrganizadorController();

organizadoresRoutes.get('/', listAllOrganizadoresController.handle);
organizadoresRoutes.post('/', createOrganizadorController.handle);

export { organizadoresRoutes };