import Productos from './productos.repository.js';
/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const insertProduct = async (req, res) => {
  try {
    const result = await Productos.crearProducto(req.body);
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
    const { _id, ...newData } = req.body;
    const result = await Productos.editarProducto(_id, newData);
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
    const result = await Productos.eliminarProducto(req.body._id);
    res.send({
      code: 200,
      message: 'Se elimino el producto exitosamente',
      data: result,
    });
  } catch (error) {
    return res.send({ code: 400, message: 'Error al eliminar el producto' });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const productos = await Productos.listarProductos();
    res.send({
      code: 200,
      message: 'Se listaron los producto exitosamente',
      data: productos,
    });
  } catch (error) {
    return res.send({ code: 400, message: 'Error al eliminar el producto' });
  }
};
