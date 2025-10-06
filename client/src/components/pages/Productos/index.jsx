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
import ModalProducto from './AgregarProducto';
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
  const [openModal, setOpenModal] = useState(false);

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
            onClick={() => setOpenModal(true)}
          >
            Agregar Producto
          </Button>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<FilterListIcon />}
            onClick={() => setOpenModal(true)}
          >
            FILTRAR
          </Button>
        </Stack>
      </BoxOptions>
      <TablaProductos />
      <ModalProducto openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Productos;
