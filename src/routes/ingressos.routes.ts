import { Router } from 'express';
import { CreateIngressoController } from '../app/controllers/Ingresso/CreateIngressoController';
import { DeleteIngressoController } from '../app/controllers/Ingresso/DeleteIngressoController';
import { ListAllIngressosController } from '../app/controllers/Ingresso/ListAllIngressosController';
import { ListIngressoController } from '../app/controllers/Ingresso/ListIngressoController';
import { UpdateIngressoController } from '../app/controllers/Ingresso/UpdateIngressoController';
import { EventoExists } from '../app/middlewares/EventoExists';
import { IngressoExists } from '../app/middlewares/IngressoExists';

const ingressosRoutes = Router();

const createIngressoController = new CreateIngressoController();
const listAllIngressosController = new ListAllIngressosController();
const listIngressoController = new ListIngressoController();
const updateIngressoController = new UpdateIngressoController();
const deleteIngressoController = new DeleteIngressoController();

ingressosRoutes.get('/', listAllIngressosController.handle);
ingressosRoutes.get('/:id', IngressoExists, listIngressoController.handle);
ingressosRoutes.post('/', EventoExists, createIngressoController.handle);
ingressosRoutes.put('/:id', IngressoExists, EventoExists, updateIngressoController.handle);
ingressosRoutes.delete('/:id', IngressoExists, deleteIngressoController.handle);

export { ingressosRoutes };