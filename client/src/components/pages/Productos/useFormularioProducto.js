import { useState } from 'react';

const initialState = {
  nombre: '',
  descripcion: '',
  tipo: '',
  precio: 0,
  stock: 0,
};

const data = [
  {
    nombre: 'Purina Dogshow',
    descripcion: 'Purina para perro adulto. 6KG',
    tipo: 'Alimento para perro',
    precio: 240_000,
    stock: 21,
  },
];

/**
 *
 * @param {Function} onClose - setState para cerrar el modal
 * @returns
 */
export const useFormularioProducto = (handleOpen) => {
  const [producto, setProducto] = useState(initialState);
  const [dataProductos, setDataProductos] = useState([]);

  const closeModal = () => handleOpen(null);

  /**
   * Maneja el cambio de valor de los campos del formulario.
   * @param {React.ChangeEvent<HTMLInputElement>} e - Evento del input.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto((prev) => ({ ...prev, [name]: value }));
  };

  const resetProducto = () => {
    setProducto(initialState);
  };

  const editProducto = (obj) => {
    handleOpen('edit');
    setProducto({
      nombre: obj.nombre,
      descripcion: obj.descripcion,
      tipo: obj.tipo,
      precio: obj.precio,
      stock: obj.stock,
    });
  };

  const deleteProducto = (idProducto) => {
    const newProducts = dataProductos.filter(
      (product) => product.id !== idProducto
    );

    setDataProductos(newProducts);
  };

  const saveProduct = () => {
    const { descripcion, nombre, precio, stock, tipo } = producto;
    const isValid = !!(descripcion && nombre && precio && stock && tipo);

    const id = Math.floor(Math.random() * 1_000_000);
    const newProducto = { id, ...producto };

    if (isValid) {
      setDataProductos((prev) => [...prev, newProducto]);
      resetProducto();
      closeModal();
    }
  };

  return {
    producto,
    setProducto,
    resetProducto,
    handleChange,
    saveProduct,
    editProducto,
    dataProductos,
    deleteProducto,
  };
};
