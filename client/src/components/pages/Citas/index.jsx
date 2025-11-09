import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Divider, Typography } from '@mui/material';
import { BoxOptions } from '../../ui/BoxOptions';
import ModalCitas from './ModalCitas';

const Citas = () => {
  const [modalContent, setModalContent] = useState(null);

  const handleOpen = (type) => setModalContent(type);
  const closeModal = () => handleOpen(null);

  return (
    <>
      <Typography variant="h4">Citas</Typography>
      <Divider />
      <BoxOptions position="fixed">
        <Stack direction="row" spacing={6}>
          <Button
            variant="contained"
            color="success"
            startIcon={<AddCircleIcon />}
            onClick={() => handleOpen('add')}
          >
            Programar Cita
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
      <ModalCitas modalContent={modalContent} closeModal={closeModal} />
    </>
  );
};

export default Citas;
