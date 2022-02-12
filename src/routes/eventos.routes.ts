import { Router } from 'express';
import { CreateEventoController } from '../app/controllers/Evento/CreateEventoController';
import { DeleteEventoController } from '../app/controllers/Evento/DeleteEventoController';
import { ListAllEventosController } from '../app/controllers/Evento/ListAllEventosController';
import { ListEventoController } from '../app/controllers/Evento/ListEventoController';
import { UpdateEventoController } from '../app/controllers/Evento/UpdateEventoController';

const eventosRoutes = Router();

const createEventoController = new CreateEventoController();
const deleteEventoController = new DeleteEventoController();
const listAllEventosController = new ListAllEventosController();
const listEventoController = new ListEventoController();
const updateEventoController = new UpdateEventoController()


eventosRoutes.get('/', listAllEventosController.handle);
eventosRoutes.get('/:id', listEventoController.handle);
eventosRoutes.post('/', createEventoController.handle);
eventosRoutes.put('/:id', updateEventoController.handle);
eventosRoutes.delete('/:id', deleteEventoController.handle);


export { eventosRoutes };