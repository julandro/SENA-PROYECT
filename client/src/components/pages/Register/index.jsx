import React, { useState } from 'react';

import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import {
  Box,
  Button,
  Checkbox,
  Grid,
  Link as MuiLink,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import AlertComponent from '../../ui/AlertComponent';
import api from '../../../services/api';

const AuthBox = styled(Paper)(({ theme }) => ({
  width: '100%',
  maxWidth: '420px',
  borderRadius: '12px',
  padding: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(5),
  },
}));

const Register = () => {
  const { alert, setAlert } = useOutletContext();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    email: '',
    username: '',
    direccion: '',
    celular: '',
    password: '',
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const setUser = (campo) => (e) =>
    setNewUser((prev) => ({ ...prev, [campo]: e.target.value }));

  const handleRegister = async () => {
    const isFieldsEmpty = !(
      newUser.email &&
      newUser.username &&
      newUser.direccion &&
      newUser.celular &&
      newUser.password &&
      acceptedTerms
    );

    if (isFieldsEmpty)
      return setAlert(
        <AlertComponent
          setAlert={setAlert}
          message="Se deben llenar todos los campos"
          modo="error"
        />
      );

    try {
      await api.post('/auth/register', {
        ...newUser,
        acceptedTerms,
      });

      setAlert(
        <AlertComponent
          setAlert={setAlert}
          message="Se creó el usuario exitosamente, ya puede iniciar sesion"
          modo="success"
        />
      );
      navigate('/login');
    } catch (error) {
      return setAlert(
        <AlertComponent
          setAlert={setAlert}
          message={`Error al registrar el usuario. ${
            error.response.data.errors || error.response.data.message
          }`}
          modo="error"
        />
      );
    }
  };

  return (
    <AuthBox elevation={2}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography variant="h5" fontWeight="bold">
          Crear una Cuenta
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Cree una cuenta para continuar
        </Typography>
      </Box>

      {/* Campos */}
      <Stack spacing={3}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Email
          </Typography>
          <TextField
            fullWidth
            required
            size="small"
            type="email"
            value={newUser.email}
            onChange={setUser('email')}
          />
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Nombre de usuario
          </Typography>
          <TextField
            fullWidth
            required
            type="password"
            size="small"
            value={newUser.username}
            onChange={setUser('username')}
          />
        </Box>

        <Stack direction="row" spacing={2}>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Dirección
            </Typography>
            <TextField
              fullWidth
              required
              type="text"
              size="small"
              value={newUser.direccion}
              onChange={setUser('direccion')}
            />
          </Box>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Celular
            </Typography>
            <TextField
              fullWidth
              required
              type="text"
              size="small"
              value={newUser.celular}
              onChange={setUser('celular')}
            />
          </Box>
        </Stack>

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Contraseña
          </Typography>
          <TextField
            fullWidth
            required
            type="password"
            size="small"
            value={newUser.password}
            onChange={setUser('password')}
          />

          <Grid container justifyContent="flex-start" sx={{ marginLeft: -1 }}>
            <Checkbox
              id="terms"
              defaultValue={true}
              size="small"
              checked={newUser.acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
            />
            <Typography
              variant="subtitle2"
              gutterBottom
              marginTop={1}
              component="label"
              htmlFor="terms"
            >
              Acepto los términos y condiciones.
            </Typography>
          </Grid>
        </Box>
      </Stack>

      {/* Botones */}
      <Stack spacing={2} sx={{ mt: 5 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{ py: 1.2 }}
          onClick={handleRegister}
        >
          Crear cuenta
        </Button>
        <Typography variant="subtitle2" textAlign="center">
          ¿Ya tienes una cuenta?{' '}
          <MuiLink component={Link} to="/login" underline="hover">
            Iniciar Sesion
          </MuiLink>
        </Typography>
      </Stack>
    </AuthBox>
  );
};

export default Register;
