import { Router } from 'express';
import * as authController from './auth.controller.js';
import validateSchema from '../../middlewares/validateSchema.js';
import { registerUserSchema, loginUserSchema } from './auth.validations.js';

const router = Router();

router.post(
  '/register',
  validateSchema(registerUserSchema),
  authController.register
);
router.post('/login', validateSchema(loginUserSchema), authController.login);
router.get('/refresh-token', authController.refreshToken);

export default router;
