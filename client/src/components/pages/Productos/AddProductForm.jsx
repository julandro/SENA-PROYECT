import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Stack, TextField } from '@mui/material';

const AddProductForm = ({ producto, handleChange, saveProduct, isEdit }) => {
  return (
    <>
      <Box>
        <Typography variant="h5" fontWeight="bold">
          {isEdit ? 'Editar' : 'Agregar'} Producto
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Digite los campos para {isEdit ? 'editar' : 'añadir'} el producto
        </Typography>
      </Box>
      <Stack spacing={3} marginTop={3}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Nombre
          </Typography>
          <TextField
            fullWidth
            required
            size="small"
            type="text"
            name="nombre"
            value={producto.nombre}
            onChange={handleChange}
          />
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Descripcion
          </Typography>
          <TextField
            fullWidth
            required
            type="text"
            size="small"
            name="descripcion"
            value={producto.descripcion}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Tipo
          </Typography>
          <TextField
            fullWidth
            required
            type=""
            size="small"
            name="tipo"
            value={producto.tipo}
            onChange={handleChange}
          />
        </Box>
        <Stack direction="row" spacing={2}>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Precio
            </Typography>
            <TextField
              fullWidth
              required
              type="number"
              size="small"
              name="precio"
              value={producto.precio}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Stock
            </Typography>
            <TextField
              fullWidth
              required
              type="number"
              size="small"
              name="stock"
              value={producto.stock}
              onChange={handleChange}
            />
          </Box>
        </Stack>
        <Button
          variant="contained"
          fullWidth
          color="success"
          onClick={() => saveProduct()}
        >
          {isEdit ? 'Editar' : 'Agregar'} Producto
        </Button>
      </Stack>
    </>
  );
};

export default AddProductForm;
