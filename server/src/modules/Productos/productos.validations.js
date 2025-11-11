import { z } from 'zod';
import { ObjectId } from 'mongodb';

const ProductoBaseSchema = z.object({
  nombre: z.string().nonempty().trim(),
  descripcion: z.string().nonempty().trim(),
  tipo: z.string().trim(),
  precio: z.number().gte(0),
  stock: z.number().gte(0),
});

export const id = z.object({
  _id: z.string(),
});

export const AddProductoSchema = ProductoBaseSchema.transform((v) => ({
  _id: String(new ObjectId()),
  ...v,
  createdAt: new Date(),
}));

export const ProductoSchema = ProductoBaseSchema.extend({
  _id: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
}).transform((v) => ({
  ...v,
  updatedAt: new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' }),
}));

export const GetAllProductosSchema = z.array(ProductoSchema);
