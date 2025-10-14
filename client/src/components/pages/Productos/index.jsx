import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TablaProductos from './TablaProductos';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Divider, Typography } from '@mui/material';
import ModalProducto from './ModalProducto';
import { useState } from 'react';

const BoxOptions = styled('div')(() => ({
  position: 'fixed',
  display: 'flex',
  justifySelf: 'center',
  justifyItems: 'center',
  alignItems: 'center',
  marginTop: 20,
}));

const Productos = () => {
  const [modalContent, setModalContent] = useState(null);

  const handleOpen = (type) => () => setModalContent(type);

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
            onClick={handleOpen('add')}
          >
            Agregar Producto
          </Button>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<FilterListIcon />}
            onClick={handleOpen('filter')}
          >
            FILTRAR
          </Button>
        </Stack>
      </BoxOptions>
      <TablaProductos />
      <ModalProducto
        modalContent={modalContent}
        closeModal={() => setModalContent(null)}
      />
    </>
  );
};

export default Productos;
