import { Router } from 'express';
import * as CitasController from './citas.controller.js';

const router = Router();

router.post('/getAllByUser', CitasController.getCitasByUser);
router.post('/programarCita', CitasController.crearCita);
router.post('/editarCita', CitasController.editarCita);
router.post('/eliminarCita', CitasController.eliminarCita);

export default router;
