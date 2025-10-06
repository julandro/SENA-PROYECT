import { useState } from 'react';

export const useFormularioProducto = (initialState, onClose) => {
  const [producto, setProducto] = useState(initialState);
  const [alert, setAlert] = useState({ open: false, isSuccess: null });

  /**
   * Maneja el cambio de valor de los campos del formulario.
   * @param {React.ChangeEvent<HTMLInputElement>} e - Evento del input.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto((prev) => ({ ...prev, [name]: value }));
  };

  const saveProduct = () => {
    const { descripcion, nombre, precio, stock, tipo } = producto;
    const isValid = !!(descripcion && nombre && precio && stock && tipo);

    setAlert({ open: true, isSuccess: isValid });

    if (isValid) {
      setProducto(initialState);
      onClose();
    }
  };

  return {
    producto,
    alert,
    setAlert,
    handleChange,
    saveProduct,
  };
};
