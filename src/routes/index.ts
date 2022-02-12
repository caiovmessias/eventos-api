import { Router } from 'express';
import { eventosRoutes } from './eventos.routes';

import { organizadoresRoutes } from './organizadores.routes'

const router = Router();

router.use('/organizador', organizadoresRoutes);
router.use('/evento', eventosRoutes);

export { router };
