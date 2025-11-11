import { db } from '../../config/database.js';

class Productos {
  /**
   * @type {import('mongodb').Collection}
   */
  static collection;

  static async getCollection() {
    if (!this.collection) {
      Productos.collection = await db.collection('productos');
    }
    return this.collection;
  }

  /**
   * Metodo para agregar un producto a la base de datos
   * @param {Object} producto - Producto a insertar en la base de datos
   * @returns
   */
  static async crearProducto(producto) {
    await Productos.getCollection();

    const result = await Productos.collection.insertOne(producto);
    return result;
  }

  /**
   * Metodo para editar el producto
   * @param {Object} params - id del producto que se quiere actualizar
   * @param {string} params.idProduct - id del producto que se quiere actualizar
   * @param {string} params.userId - id del producto que se quiere actualizar
   * @param {Object} params.newProduct - Producto a actualizar
   * @returns
   */
  static async editarProducto({ idProduct, userId, newProduct }) {
    await Productos.getCollection();

    const result = await Productos.collection.updateOne(
      { _id: idProduct, userId },
      { $set: newProduct }
    );
    return result;
  }

  /**
   * Metodo para listar los productos
   * @returns
   */
  static async listarMisProductos(id) {
    await Productos.getCollection();

    const result = await Productos.collection.find({ userId: id }).toArray();
    return result;
  }

  /**
   * Metodo para eliminar un producto de la base de datos
   * @param {string} id - id del producto que se va a eliminar
   * @returns
   */
  static async eliminarProducto(id) {
    await Productos.getCollection();

    const result = await Productos.collection.deleteOne({ _id: id });
    return result;
  }
}

export default Productos;
