import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

const AddCitaForm = () => {
  return (
    <>
      <Box>
        <Typography variant="h5" fontWeight="bold">
          Programar Cita
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Digite los campos para programar la cita
        </Typography>
      </Box>
      <Stack spacing={3} marginTop={3}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Servicio
          </Typography>
          <TextField
            fullWidth
            required
            size="small"
            type="text"
            name="nombre"
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
          />
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Tipo
          </Typography>
          <TextField fullWidth required type="" size="small" name="tipo" />
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
            />
          </Box>
        </Stack>
        <Button variant="contained" fullWidth color="success">
          Programar Cita
        </Button>
      </Stack>
    </>
  );
};

export default AddCitaForm;
