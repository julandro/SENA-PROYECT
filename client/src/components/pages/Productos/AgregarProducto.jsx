import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import AlertMessages from './AlertMessages';

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

export default function ModalProducto({ openModal: open, setOpenModal }) {
  const [valorProducto, setValorProducto] = useState({
    nombre: '',
    descripcion: '',
    tipo: '',
    precio: 0,
    stock: 0,
  });
  const [openAlert, setOpenAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);

  const handleClose = () => setOpenModal(false);

  /**
   * Maneja el cambio de valor de los campos del formulario.
   * @param {React.ChangeEvent<HTMLInputElement>} e - Evento del input.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValorProducto((prev) => ({ ...prev, [name]: value }));
  };

  const saveProduct = () => {
    const { descripcion, nombre, precio, stock, tipo } = valorProducto;
    const isValid = descripcion && nombre && precio && stock && tipo;

    setOpenAlert(true);
    setIsSuccess(isValid);

    if (isValid) {
      setValorProducto({
        nombre: '',
        descripcion: '',
        tipo: '',
        precio: 0,
        stock: 0,
      });
      return setOpenModal(false);
    }
  };

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
                  value={valorProducto.nombre}
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
                  value={valorProducto.descripcion}
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
                  value={valorProducto.tipo}
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
                    value={valorProducto.precio}
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
                    value={valorProducto.stock}
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
      {openAlert && (
        <AlertMessages
          open={openAlert}
          setOpen={setOpenAlert}
          isSuccess={isSuccess}
        />
      )}
    </div>
  );
}
