import { ObjectId } from 'mongodb';
import Productos from './productos.repository.js';
/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const insertProduct = async (req, res) => {
  try {
    const newProduct = {
      _id: String(new ObjectId()),
      ...req.body,
      createdAt: new Date(),
    };

    const result = await Productos.crearProducto(newProduct);

    res.send({
      code: 200,
      message: 'Se inserto el producto exitosamente',
      data: result,
    });
  } catch (error) {
    res.send({ code: 400, message: 'Error al insertar el producto' });
  }
};

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const editProduct = async (req, res) => {
  try {
    const { idProduct, userId, ...newData } = req.body;

    const result = await Productos.editarProducto({
      idProduct,
      userId,
      newProduct: newData,
    });

    res.send({
      code: 200,
      message: 'Se edito el producto exitosamente',
      data: result,
    });
  } catch (error) {
    return res.send({
      code: 400,
      message: 'Error al editar el producto',
      msgError: error,
    });
  }
};

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const deleteProduct = async (req, res) => {
  try {
    const result = await Productos.eliminarProducto(req.body.id);
    res.send({
      code: 200,
      message: 'Se elimino el producto exitosamente',
      data: result,
    });
  } catch (error) {
    return res.send({ code: 400, message: 'Error al eliminar el producto' });
  }
};

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getAllMyProducts = async (req, res) => {
  try {
    const productos = await Productos.listarMisProductos(req.body.userId);

    res.send({
      code: 200,
      message: 'Se listaron los producto exitosamente',
      data: productos,
    });
  } catch (error) {
    return res.send({ code: 400, message: 'Error al eliminar el producto' });
  }
};
