import { Router } from 'express';
import * as productController from './productos.controller.js';

const router = Router();

router.get('/getAll', productController.getAllProducts);
router.post('/add', productController.insertProduct);
router.post('/edit', productController.editProduct);
router.post('/delete', productController.deleteProduct);

export default router;
