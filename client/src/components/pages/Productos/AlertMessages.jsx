import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export default function AlertMessages({ alert, setAlert }) {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert({ open: false, isSuccess: null });
  };

  return (
    <div>
      <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose}>
        {alert.isSuccess ? (
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
