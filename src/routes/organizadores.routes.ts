import { Router } from 'express';
import { CreateOrganizadorController } from '../app/controllers/Organizador/CreateOrganizadorController';
import { ListAllOrganizadoresController } from '../app/controllers/Organizador/ListAllOrganizadoresController';
import { ListOrganizadorController } from '../app/controllers/Organizador/ListOrganizadorController';
import { UpdateOrganizadorController } from '../app/controllers/Organizador/UpdateOrganizadorController';
import { DeleteOrganizadorController } from '../app/controllers/Organizador/DeleteOrganizadorController';

const organizadoresRoutes = Router();

const createOrganizadorController = new CreateOrganizadorController();
const listAllOrganizadoresController = new ListAllOrganizadoresController();
const listOrganizadorController = new ListOrganizadorController();
const updateOrganizadorController = new UpdateOrganizadorController();
const deleteOrganizadorController = new DeleteOrganizadorController();

organizadoresRoutes.get('/', listAllOrganizadoresController.handle);
organizadoresRoutes.get('/:id', listOrganizadorController.handle);
organizadoresRoutes.post('/', createOrganizadorController.handle);
organizadoresRoutes.put('/:id', updateOrganizadorController.handle);
organizadoresRoutes.delete('/:id', deleteOrganizadorController.handle);

export { organizadoresRoutes };