import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Divider, Typography } from '@mui/material';
import { BoxOptions } from '../../ui/BoxOptions';
import ModalCitas from './ModalCitas';
import CalendarCitas from './CalendarCitas';
import CircleIcon from '@mui/icons-material/Circle';
import useCitasHook from './useCitasHook';

const Citas = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isProgramable, setIsProgramable] = useState(false);

  const handleOpen = (type) => setModalContent(type);
  const closeModal = () => handleOpen(null);

  const {
    listCitas,
    handleSelect,
    cita,
    addCita,
    handleChangeCita,
    handleEventClick,
    editarCita,
    eliminarCita,
  } = useCitasHook(handleOpen);

  return (
    <>
      <Typography variant="h4">Citas</Typography>
      <Divider />
      <Typography mt={5} variant="h5" textAlign="center" color="inherit">
        {isProgramable ? 'Se puede' : 'No se pueden'} programar citas
      </Typography>
      <BoxOptions position="fixed" sx={{ mb: 1 }}>
        <Stack
          direction="row"
          spacing={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            color="inherit"
            startIcon={
              isProgramable ? (
                <CircleIcon fontSize="10px" color="success" />
              ) : (
                <CircleIcon fontSize="10px" color="error" />
              )
            }
          >
            ESTADO
          </Button>
          <Button
            variant="contained"
            color={isProgramable ? 'error' : 'success'}
            onClick={() => setIsProgramable(!isProgramable)}
          >
            {isProgramable ? 'Inhabilitar' : 'Habilitar'}
          </Button>
        </Stack>
      </BoxOptions>
      <CalendarCitas
        listCitas={listCitas}
        isProgramable={isProgramable}
        handleSelect={handleSelect}
        handleEventClick={handleEventClick}
      />
      <ModalCitas
        modalContent={modalContent}
        closeModal={closeModal}
        cita={cita}
        addCita={addCita}
        handleChangeCita={handleChangeCita}
        editarCita={editarCita}
        eliminarCita={eliminarCita}
      />
    </>
  );
};

export default Citas;
