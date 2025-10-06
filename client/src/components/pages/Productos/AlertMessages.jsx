import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export default function AlertMessages({ open, setOpen, isSuccess }) {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        {isSuccess ? (
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            severity="success"
            variant="filled"
          >
            Se agregó un producto exitosamente
          </Alert>
        ) : (
          <Alert
            onClose={handleClose}
            severity="warning"
            variant="filled"
            sx={{ width: '100%' }}
          >
            No se ha podido crear el producto
          </Alert>
        )}
      </Snackbar>
    </div>
  );
}
