import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Stack, TextField } from '@mui/material';
import dayjs from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { useState } from 'react';

const AddCitaForm = () => {
  const [descripcion, setDescripcion] = useState('');
  const [servicio, setServicio] = useState('');
  const [date, setDate] = useState(null);
  const [horaInicial, setHoraInicial] = useState(null);
  const [horaFinal, setHoraFinal] = useState(null);

  console.log({ date, horaInicial, horaFinal });
  const horasOcupadas = [
    '09:00',
    '09:10',
    '09:20',
    '09:30',
    '09:40',
    '09:50',
    '12:30',
    '15:00',
  ];

  const shouldDisableTime = (value, view) => {
    if (view === 'hours') {
      const horaActual = dayjs(value).hour();
      const possibleMinutes = [0, 10, 20, 30, 40, 50];
      return possibleMinutes.every((minute) => {
        const timeToTest = dayjs()
          .hour(horaActual)
          .minute(minute)
          .format('HH:mm');
        return horasOcupadas.includes(timeToTest);
      });
    }
    if (view === 'minutes') {
      const horaMin = dayjs(value).format('HH:mm');
      return horasOcupadas.includes(horaMin);
    }
    return false;
  };

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
            Descripcion
          </Typography>
          <TextField
            fullWidth
            required
            type="text"
            size="small"
            name="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Servicio
          </Typography>
          <TextField
            fullWidth
            required
            type="text"
            size="small"
            name="servicio"
            onChange={(e) => e.target.value}
          />
        </Box>

        <Button variant="contained" fullWidth color="success">
          Programar Cita
        </Button>
      </Stack>
    </>
  );
};

export default AddCitaForm;
