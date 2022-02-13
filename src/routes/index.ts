import { Router } from 'express';

import { eventosRoutes } from './eventos.routes';
import { organizadoresRoutes } from './organizadores.routes'
import { usuariosRoutes } from './usuarios.routes'

const router = Router();

router.use('/organizador', organizadoresRoutes);
router.use('/evento', eventosRoutes);
router.use('/usuario', usuariosRoutes);

export { router };
