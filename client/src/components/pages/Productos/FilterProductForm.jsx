import React, { useDeferredValue } from 'react';
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
  Autocomplete,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Badge,
  Chip,
} from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useMemo } from 'react';
import { useCallback } from 'react';

const FilterProductForm = ({ closeModal }) => {
  const [isFilterPriceRange, setIsFilterPriceRange] = useState(true);
  const [priceLimitRange, setPriceLimitRange] = useState([0, 100_000]);
  const [priceRangeValue, setPriceRangeValue] = useState([
    priceLimitRange[0],
    priceLimitRange[1],
  ]);
  const deferredPriceLimitRange = useDeferredValue(priceLimitRange);

  const handleChangeSlider = useCallback((event, value) => {
    setPriceRangeValue(value);
  }, []);

  const marks = useMemo(
    () => [
      {
        value: deferredPriceLimitRange[0],
        label: `$${deferredPriceLimitRange[0]
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`,
      },
      {
        value: deferredPriceLimitRange[1],
        label: `$${deferredPriceLimitRange[1]
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`,
      },
    ],
    [deferredPriceLimitRange]
  );

  const sliderLabelFormat = useMemo(
    () => (value) =>
      `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`,
    []
  );

  const handChangeBtnLimitPrice = (e) => {
    if (
      e.target.name === 'min' &&
      e.target.value >= 0 &&
      deferredPriceLimitRange[1] > e.target.value
    ) {
      setPriceLimitRange((prev) => [Number(e.target.value), prev[1]]);
      if (priceRangeValue[0] < e.target.value) {
        setPriceRangeValue((prev) => [Number(e.target.value), prev[1]]);
      }
    }
    if (
      e.target.name === 'max' &&
      e.target.value > 0 &&
      deferredPriceLimitRange[0] < e.target.value
    ) {
      setPriceLimitRange((prev) => [prev[0], Number(e.target.value)]);
      if (priceRangeValue[1] > e.target.value) {
        setPriceRangeValue((prev) => [prev[0], Number(e.target.value)]);
      }
    }
  };

  return (
    <>
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" fontWeight="bold">
            Filtros
          </Typography>
          {/*
          
          <Chip
            label={1}
            size="small"
            sx={{
              fontWeight: 'bold',
            }}
            color="primary"
          />
          */}
        </Box>
        <Typography variant="subtitle2" color="text.secondary">
          Busque productos segun sus filtros
        </Typography>
      </Box>

      <Box
        sx={{
          my: 3,
          maxHeight: '50vh',
          overflowY: 'auto',
          //pr: 2, // para que la barra no tape contenido
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
              <Autocomplete
                disablePortal
                options={[]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Tipo de Producto"
                    variant="standard"
                  />
                )}
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
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Opciones de Filtrado
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    checked={isFilterPriceRange}
                    value={isFilterPriceRange}
                    control={<Radio />}
                    label="Rango"
                    onChange={(e) => setIsFilterPriceRange(e.target.value)}
                  />
                  <FormControlLabel
                    checked={!isFilterPriceRange}
                    value={!isFilterPriceRange}
                    control={<Radio />}
                    label="Precio Exacto"
                    onChange={(e) => setIsFilterPriceRange(!e.target.value)}
                  />
                </RadioGroup>
              </FormControl>
              {isFilterPriceRange && (
                <Box mx={5} mt={2}>
                  <Box textAlign="center" my={2}>
                    <Typography variant="h6">Precio a Filtrar</Typography>
                    <Typography variant="overline" sx={{ fontSize: 16 }}>
                      {`$${priceRangeValue[0]
                        .toString()
                        .replace(
                          /\B(?=(\d{3})+(?!\d))/g,
                          ' '
                        )} - $${priceRangeValue[1]
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`}
                    </Typography>
                  </Box>
                  <Slider
                    defaultValue={[0, 100_000]}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    min={deferredPriceLimitRange[0]}
                    max={deferredPriceLimitRange[1]}
                    valueLabelFormat={sliderLabelFormat}
                    marks={marks}
                    value={priceRangeValue}
                    onChange={handleChangeSlider}
                    step={2000}
                  />
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <TextField
                      sx={{ width: 100 }}
                      size="small"
                      type="number"
                      label="Mín."
                      value={deferredPriceLimitRange[0]}
                      onChange={handChangeBtnLimitPrice}
                      name="min"
                    />
                    <TextField
                      sx={{ width: 100 }}
                      size="small"
                      type="number"
                      label="Max."
                      value={deferredPriceLimitRange[1]}
                      onChange={handChangeBtnLimitPrice}
                      name="max"
                    />
                  </Box>
                </Box>
              )}
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
      <Stack
        direction={'row'}
        display="flex"
        alignContent="center"
        justifyContent="space-between"
      >
        <Button onClick={closeModal} variant="contained">
          Limpiar
        </Button>
        <Button onClick={closeModal} variant="contained" color="success">
          Filtrar
        </Button>
      </Stack>
    </>
  );
};

export default FilterProductForm;
