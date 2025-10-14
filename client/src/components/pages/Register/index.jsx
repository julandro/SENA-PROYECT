import React from 'react';

import { Link } from 'react-router-dom';
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
          <TextField fullWidth required size="small" type="email" />
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Nombre de usuario
          </Typography>
          <TextField fullWidth required type="password" size="small" />
        </Box>

        <Stack direction="row" spacing={2}>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Dirección
            </Typography>
            <TextField fullWidth required type="text" size="small" />
          </Box>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Celular
            </Typography>
            <TextField fullWidth required type="text" size="small" />
          </Box>
        </Stack>

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Contraseña
          </Typography>
          <TextField fullWidth required type="password" size="small" />

          <Grid container justifyContent="flex-start" sx={{ marginLeft: -1 }}>
            <Checkbox defaultValue={true} size="small" />
            <Typography variant="subtitle2" gutterBottom marginTop={1}>
              Acepto los términos y condiciones.
            </Typography>
          </Grid>
        </Box>
      </Stack>

      {/* Botones */}
      <Stack spacing={2} sx={{ mt: 5 }}>
        <Button variant="contained" fullWidth sx={{ py: 1.2 }}>
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
