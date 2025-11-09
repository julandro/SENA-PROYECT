import React, { useRef, useEffect, useState } from 'react';

import CardInfoCitas from '../../../ui/CardInfoCitas';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';

import { AppBar, BoxToggleButton } from './styles';
import { useCitas } from '../../../../contexts/CitasContext';

export default function RecordatorioCitas({ open }) {
  const [isCitasShowing, setIsCitasShowing] = useState(true);
  const { citasPendientes } = useCitas();
  return (
    <>
      {citasPendientes.length ? (
        <>
          <BoxToggleButton
            open={open}
            isCitasShowing={isCitasShowing}
            sx={{ px: 1, py: 0.3, borderTopRightRadius: 100 }}
          >
            <Typography sx={{ px: 3 }}>Citas Programadas</Typography>
            <IconButton
              aria-label="delete"
              size="medium"
              sx={{ ml: 10, cursor: 'pointer', mr: 2 }}
              onClick={() => setIsCitasShowing(!isCitasShowing)}
            >
              {isCitasShowing ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </BoxToggleButton>
          <AppBar
            position="fixed"
            open={open}
            isCitasShowing={isCitasShowing}
            elevation={3}
            sx={{ background: 'white' }}
          >
            <CardInfoCitas />
          </AppBar>
        </>
      ) : null}
    </>
  );
}
