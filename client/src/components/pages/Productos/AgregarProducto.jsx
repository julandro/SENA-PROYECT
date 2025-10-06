import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack, TextField } from '@mui/material';
import AlertMessages from './AlertMessages';
import { useFormularioProducto } from './useFormularioProducto';
import { useEffect } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '20px',
};

const initialState = {
  nombre: '',
  descripcion: '',
  tipo: '',
  precio: 0,
  stock: 0,
};

export default function ModalProducto({ openModal: open, setOpenModal }) {
  const handleClose = () => setOpenModal(false);

  const { producto, alert, setAlert, handleChange, saveProduct } =
    useFormularioProducto(initialState, handleClose);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open} unmountOnExit>
          <Box sx={style}>
            <Box>
              <Typography variant="h5" fontWeight="bold">
                Agregar Producto
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Digite los campos para añadir el producto
              </Typography>
            </Box>
            <Stack spacing={3} marginTop={3}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Nombre
                </Typography>
                <TextField
                  fullWidth
                  required
                  size="small"
                  type="text"
                  name="nombre"
                  value={producto.nombre}
                  onChange={handleChange}
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
                  value={producto.descripcion}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Tipo
                </Typography>
                <TextField
                  fullWidth
                  required
                  type=""
                  size="small"
                  name="tipo"
                  value={producto.tipo}
                  onChange={handleChange}
                />
              </Box>
              <Stack direction="row" spacing={2}>
                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    Precio
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    type="number"
                    size="small"
                    name="precio"
                    value={producto.precio}
                    onChange={handleChange}
                  />
                </Box>
                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    Stock
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    type="number"
                    size="small"
                    name="stock"
                    value={producto.stock}
                    onChange={handleChange}
                  />
                </Box>
              </Stack>
              <Button
                variant="contained"
                fullWidth
                color="success"
                onClick={() => saveProduct()}
              >
                Agregar Producto
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
      {alert && <AlertMessages alert={alert} setAlert={setAlert} />}
    </div>
  );
}
