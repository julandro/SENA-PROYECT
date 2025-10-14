import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Grid,
  Link as MuiLink,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { useAuth } from '../../../contexts/AuthContext';

const AuthBox = styled(Paper)(({ theme }) => ({
  width: '100%',
  maxWidth: '420px',
  borderRadius: '12px',
  padding: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(5),
  },
}));

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/');
  };

  return (
    <AuthBox elevation={2}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography variant="h5" fontWeight="bold">
          Iniciar Sesión
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Ingrese su email y contraseña para continuar
        </Typography>
      </Box>

      {/* Campos */}
      <Stack spacing={3}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Email
          </Typography>
          <TextField fullWidth required />
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Contraseña
          </Typography>
          <TextField fullWidth required type="password" />

          <Grid container justifyContent="flex-end" sx={{ mt: 1 }}>
            <MuiLink
              component={Link}
              to="/"
              underline="hover"
              variant="subtitle2"
              color="primary"
            >
              Olvidé la contraseña
            </MuiLink>
          </Grid>
        </Box>
      </Stack>

      {/* Botones */}
      <Stack spacing={2} sx={{ mt: 5 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{ py: 1.2 }}
          onClick={handleLogin}
        >
          Iniciar sesión (PROTOTIPO)
        </Button>
        <Typography variant="subtitle2" textAlign="center">
          ¿No tienes una cuenta?{' '}
          <MuiLink component={Link} to="/register" underline="hover">
            Crear cuenta
          </MuiLink>
        </Typography>
      </Stack>
    </AuthBox>
  );
};

export default Login;
