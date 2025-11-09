import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TablaProductos from './TablaProductos';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Divider, Typography } from '@mui/material';
import ModalProducto from './ModalProducto';
import { useState } from 'react';
import { useFormularioProducto } from './useFormularioProducto';
import { BoxOptions } from '../../ui/BoxOptions';

const Productos = () => {
  const [modalContent, setModalContent] = useState(null);

  const handleOpen = (type) => setModalContent(type);

  const {
    producto,
    editProducto,
    handleChange,
    saveProduct,
    resetProducto,
    dataProductos,
    deleteProducto,
  } = useFormularioProducto(handleOpen);

  const closeModalAndReset = () => {
    handleOpen(null);
    resetProducto();
  };

  return (
    <>
      <Typography variant="h4">Productos</Typography>
      <Divider />
      <BoxOptions position="fixed">
        <Stack direction="row" spacing={6}>
          <Button
            variant="contained"
            color="success"
            startIcon={<AddCircleIcon />}
            onClick={() => handleOpen('add')}
          >
            Agregar Producto
          </Button>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<FilterListIcon />}
            onClick={() => handleOpen('filter')}
          >
            FILTRAR
          </Button>
        </Stack>
      </BoxOptions>
      <TablaProductos
        editProducto={editProducto}
        dataProductos={dataProductos}
        deleteProducto={deleteProducto}
      />
      <ModalProducto
        modalContent={modalContent}
        closeModal={closeModalAndReset}
        producto={producto}
        saveProduct={saveProduct}
        handleChange={handleChange}
      />
    </>
  );
};

export default Productos;
