import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../../services/api';
import { useAuth } from '../../../contexts/AuthContext';

const initialState = {
  id: '',
  nombre: '',
  descripcion: '',
  tipo: '',
  precio: 0,
  stock: 0,
};

/**
 *
 * @param {Function} onClose - setState para cerrar el modal
 * @returns
 */
export const useFormularioProducto = (handleOpen) => {
  const [producto, setProducto] = useState(initialState);
  const [dataProductos, setDataProductos] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const { user } = useAuth();

  const closeModal = () => handleOpen(null);

  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await api.post('/productos/getAllMyProducts', {
        userId: user._id,
      });
      setDataProductos(data.data);
    };
    getAllProducts();
  }, [refresh]);

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
      id: obj._id,
      nombre: obj.nombre,
      descripcion: obj.descripcion,
      tipo: obj.tipo,
      precio: obj.precio,
      stock: obj.stock,
    });
  };

  const deleteProducto = async (idProducto) => {
    try {
      await api.post('/productos/delete', { id: idProducto });
      setRefresh((prev) => !prev);
    } catch (error) {}
  };

  const saveProduct = async (idProducto) => {
    const { descripcion, nombre, precio, stock, tipo } = producto;
    const isValid = !!(descripcion && nombre && precio && stock && tipo);

    if (!isValid) return;

    if (idProducto) {
      try {
        await api.post('/productos/edit', {
          userId: user._id,
          idProduct: idProducto,
          ...producto,
        });
        resetProducto();
        setRefresh((prev) => !prev);
        closeModal();
      } catch (error) {}
    } else {
      try {
        await api.post('/productos/add', {
          userId: user._id,
          ...producto,
        });
        resetProducto();
        setRefresh((prev) => !prev);
        closeModal();
      } catch (error) {}
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
