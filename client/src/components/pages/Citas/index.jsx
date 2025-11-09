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
import { useCitas } from '../../../contexts/CitasContext';

const Citas = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isProgamable, setIsProgramable] = useState(false);

  const { citasProgramadas, setCitasProgramadas } = useCitas();

  const handleOpen = (type) => setModalContent(type);
  const closeModal = () => handleOpen(null);

  return (
    <>
      <Typography variant="h4">Citas</Typography>
      <Divider />
      <Typography mt={5} variant="h5" textAlign="center" color="inherit">
        {isProgamable ? 'Se puede' : 'No se pueden'} programar citas
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
              isProgamable ? (
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
            color={isProgamable ? 'error' : 'success'}
            onClick={() => setIsProgramable(!isProgamable)}
          >
            {isProgamable ? 'Inhabilitar' : 'Habilitar'}
          </Button>
        </Stack>
      </BoxOptions>
      <CalendarCitas
        citasProgramadas={citasProgramadas}
        isProgamable={isProgamable}
        handleOpen={handleOpen}
      />
      <ModalCitas modalContent={modalContent} closeModal={closeModal} />
    </>
  );
};

export default Citas;
