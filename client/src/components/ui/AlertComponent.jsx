import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const AlertComponent = ({ setAlert, message, modo }) => {
  const handleClose = () => setAlert(null);

  return (
    <Snackbar open={!!message} autoHideDuration={3000} onClose={handleClose}>
      <Alert severity={modo} variant="filled" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertComponent;
