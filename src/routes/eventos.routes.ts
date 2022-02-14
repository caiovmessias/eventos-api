import { Router } from 'express';
import { CreateEventoController } from '../app/controllers/Evento/CreateEventoController';
import { DeleteEventoController } from '../app/controllers/Evento/DeleteEventoController';
import { ListAllEventosController } from '../app/controllers/Evento/ListAllEventosController';
import { ListEventoController } from '../app/controllers/Evento/ListEventoController';
import { UpdateEventoController } from '../app/controllers/Evento/UpdateEventoController';
import { EventoExists } from '../app/middlewares/EventoExists';
import { EventoOcurred } from '../app/middlewares/EventoOcurred';
import { NomeEventoExists } from '../app/middlewares/NomeEventoExists';
import { OrganizadorExists } from '../app/middlewares/OrganizadorExists';

const eventosRoutes = Router();

const createEventoController = new CreateEventoController();
const deleteEventoController = new DeleteEventoController();
const listAllEventosController = new ListAllEventosController();
const listEventoController = new ListEventoController();
const updateEventoController = new UpdateEventoController()


eventosRoutes.get('/', listAllEventosController.handle);
eventosRoutes.get('/:id', EventoExists, listEventoController.handle);
eventosRoutes.post('/', OrganizadorExists, NomeEventoExists, createEventoController.handle);
eventosRoutes.put('/:id', EventoExists, OrganizadorExists, NomeEventoExists, EventoOcurred, updateEventoController.handle);
eventosRoutes.delete('/:id', EventoExists, deleteEventoController.handle);


export { eventosRoutes };