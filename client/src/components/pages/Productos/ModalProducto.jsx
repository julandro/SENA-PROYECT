import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { useEffect } from 'react';
import AddProductForm from './AddProductForm';
import { useState } from 'react';
import FilterProductForm from './FilterProductForm';
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

export default function ModalProducto({ modalContent, closeModal }) {
  const [content, setContent] = useState(null);
  const [lastContent, setLastContent] = useState(null);

  useEffect(() => {
    if (modalContent) {
      setLastContent(modalContent);
      switch (modalContent) {
        case 'add':
          setContent(<AddProductForm closeModal={closeModal} />);
          break;
        case 'filter':
          setContent(<FilterProductForm closeModal={closeModal} />);
          break;
        default:
          setContent(null);
          break;
      }
    }
  }, [modalContent, closeModal]);

  return (
    <div>
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
    </div>
  );
}
