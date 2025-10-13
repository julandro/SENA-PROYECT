import React from 'react';
import {
  Box,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  TextField,
  Stack,
  Typography,
  Slider,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FilterProductForm = ({ closeModal }) => {
  const [switchFilter, setSwitchFilter] = useState({
    nombre: false,
    descripcion: false,
    tipo: false,
    precio: false,
    stock: false,
  });

  const handleChange = (e) =>
    setSwitchFilter((prev) => ({ ...prev, [e.target.name]: e.target.checked }));

  return (
    <>
      <Box>
        <Typography variant="h5" fontWeight="bold">
          Filtros
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Busque productos segun sus filtros
        </Typography>
      </Box>

      <Box
        sx={{
          my: 3,
          maxHeight: '50vh',
          overflowY: 'auto',
          pr: 2, // para que la barra no tape contenido
        }}
      >
        {/* Nombre */}
        <Accordion
          elevation={0}
          sx={{ mb: 2, '&:before': { display: 'none' } }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: '#f8f9fa',
              borderRadius: 2,
              '&:hover': { backgroundColor: '#e9ecef' },
            }}
          >
            <Typography fontWeight="600" color="primary">
              Nombre
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <TextField
                fullWidth
                size="small"
                type="text"
                label="Digite el nombre"
              />
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Tipo */}
        <Accordion
          elevation={0}
          sx={{ mb: 2, '&:before': { display: 'none' } }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: '#f8f9fa',
              borderRadius: 2,
              '&:hover': { backgroundColor: '#e9ecef' },
            }}
          >
            <Typography fontWeight="600" color="primary">
              Tipo
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <TextField
                fullWidth
                size="small"
                type="text"
                label="Digite el tipo"
              />
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Precio */}
        <Accordion
          elevation={0}
          sx={{ mb: 2, '&:before': { display: 'none' } }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: '#f8f9fa',
              borderRadius: 2,
              '&:hover': { backgroundColor: '#e9ecef' },
            }}
          >
            <Typography fontWeight="600" color="primary">
              Precio
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <TextField
                fullWidth
                size="small"
                type="text"
                label="Digite el tipo"
              />
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Stock */}
        <Accordion
          elevation={0}
          sx={{ mb: 2, '&:before': { display: 'none' } }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: '#f8f9fa',
              borderRadius: 2,
              '&:hover': { backgroundColor: '#e9ecef' },
            }}
          >
            <Typography fontWeight="600" color="primary">
              Stock
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <TextField
                fullWidth
                size="small"
                type="text"
                label="Digite el tipo"
              />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Button onClick={closeModal}>Cerrar</Button>
    </>
  );
};

export default FilterProductForm;
