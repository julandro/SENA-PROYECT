import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

const AddCitaForm = ({
  isEdit,
  cita,
  addCita,
  handleChangeCita,
  editarCita,
  eliminarCita,
}) => {
  return (
    <>
      <Box>
        <Typography variant="h5" fontWeight="bold">
          {isEdit ? 'Editar' : 'Programar'} Cita
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
            name="servicio"
            value={cita.servicio || ''}
            onChange={(e) => handleChangeCita(e)}
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
            value={cita.descripcion || ''}
            onChange={handleChangeCita}
          />
        </Box>
        <Stack direction="row" spacing={2}>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Fecha Inicial
            </Typography>
            <TextField
              fullWidth
              required
              type="text"
              size="small"
              name="fechaInicio"
              disabled
              value={new Date(cita.fechaInicial).toLocaleDateString('es-CO', {
                timeZone: 'UTC',
                month: '2-digit', // nombre completo del mes
                day: '2-digit', // número del día
                hour: '2-digit', // hora
                minute: '2-digit', // minutos
              })}
            />
          </Box>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Fecha Final
            </Typography>
            <TextField
              fullWidth
              required
              type="text"
              size="small"
              name="fechaInicial"
              disabled
              value={new Date(cita.fechaFinal).toLocaleString('es-CO', {
                timeZone: 'UTC',
                month: '2-digit', // nombre completo del mes
                day: '2-digit', // número del día
                hour: '2-digit', // hora
                minute: '2-digit', // minutos
                hour12: true,
              })}
            />
          </Box>
        </Stack>
        {isEdit ? (
          <Stack direction="row" spacing={3}>
            <Button
              variant="contained"
              fullWidth
              color="error"
              onClick={eliminarCita}
            >
              Eliminar
            </Button>
            <Button
              variant="contained"
              fullWidth
              color="success"
              onClick={editarCita}
            >
              Editar
            </Button>
          </Stack>
        ) : (
          <Button
            variant="contained"
            fullWidth
            color="success"
            onClick={addCita}
          >
            Programar Cita
          </Button>
        )}
      </Stack>
    </>
  );
};

export default AddCitaForm;
