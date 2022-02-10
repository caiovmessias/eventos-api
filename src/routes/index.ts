import { Router } from 'express';

import { organizadoresRoutes } from './organizadores.routes'

const router = Router();

router.use('/organizador', organizadoresRoutes);

export { router };
