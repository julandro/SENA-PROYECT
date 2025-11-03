import { Router } from 'express';
import * as productController from './productos.controller.js';
import validateSchema from '../../middlewares/validateSchema.js';
import {
  AddProductoSchema,
  id,
  ProductoSchema,
} from './productos.validations.js';

const router = Router();

router.post('/getAllMyProducts', productController.getAllMyProducts);
router.post('/add', productController.insertProduct);
router.post('/edit', productController.editProduct);
router.post('/delete', productController.deleteProduct);

export default router;
