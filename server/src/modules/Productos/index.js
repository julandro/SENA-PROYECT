import { Router } from 'express';
import * as productController from './productos.controller.js';
import validateSchema from '../../middlewares/validateSchema.js';
import {
  AddProductoSchema,
  id,
  ProductoSchema,
} from './productos.validations.js';

const router = Router();

router.get('/getAll', productController.getAllProducts);
router.post(
  '/add',
  validateSchema(AddProductoSchema),
  productController.insertProduct
);
router.post(
  '/edit',
  validateSchema(ProductoSchema),
  productController.editProduct
);
router.post('/delete', validateSchema(id), productController.deleteProduct);

export default router;
