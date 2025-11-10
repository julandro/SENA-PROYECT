import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';

import { styled } from '@mui/material';

const BoxModal = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'modalContent',
})(({ theme, modalContent }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(4),
  borderRadius: '20px',
  overflow: 'hidden', // importante para que los bordes recorten el contenido
}));

const ModalComponent = ({ modalContent, closeModal, content }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={!!modalContent}
      onClose={closeModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={!!modalContent} unmountOnExit>
        <BoxModal>{content}</BoxModal>
      </Fade>
    </Modal>
  );
};

export default ModalComponent;
