import { Router } from 'express';
import { CreateOrganizadorController } from '../app/controllers/Organizador/CreateOrganizadorController';
import { ListAllOrganizadoresController } from '../app/controllers/Organizador/ListAllOrganizadoresController';
import { ListOrganizadorController } from '../app/controllers/Organizador/ListOrganizadorController';
import { UpdateOrganizadorController } from '../app/controllers/Organizador/UpdateOrganizadorController';
import { DeleteOrganizadorController } from '../app/controllers/Organizador/DeleteOrganizadorController';
import { OrganizadorExists } from '../app/middlewares/OrganizadorExists';
import { NomeOrganizadorExists } from '../app/middlewares/NomeOrganizadorExists';

const organizadoresRoutes = Router();

const createOrganizadorController = new CreateOrganizadorController();
const listAllOrganizadoresController = new ListAllOrganizadoresController();
const listOrganizadorController = new ListOrganizadorController();
const updateOrganizadorController = new UpdateOrganizadorController();
const deleteOrganizadorController = new DeleteOrganizadorController();

organizadoresRoutes.get('/', listAllOrganizadoresController.handle);
organizadoresRoutes.get('/:id', OrganizadorExists, listOrganizadorController.handle);
organizadoresRoutes.post('/', NomeOrganizadorExists, createOrganizadorController.handle);
organizadoresRoutes.put('/:id', OrganizadorExists, NomeOrganizadorExists, updateOrganizadorController.handle);
organizadoresRoutes.delete('/:id', OrganizadorExists, deleteOrganizadorController.handle);

export { organizadoresRoutes };