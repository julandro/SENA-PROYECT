import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Countdown from 'react-countdown';
import { DateTime } from 'luxon';

const cards = [
  {
    id: 1,
    title: 'Vacunacion',
    description: '9:30 am',
  },
  {
    id: 2,
    title: 'Peluqueria',
    description: '9:30 am',
  },
  {
    id: 3,
    title: 'Vacunación',
    description: '10:00 am',
  },
];

function CardInfoCitas({ citas }) {
  return (
    <Box
      sx={{
        width: '100%',

        display: 'grid',

        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',

        gap: 2,

        p: 2,
      }}
    >
      {citas.map((card) => {
        // The server sends local time with a 'Z' suffix.

        // We strip the 'Z' to treat it as a naive time string, then parse

        // it explicitly into the correct 'America/Bogota' timezone.

        const naiveStartString = card.fechaInicial.slice(0, -1);

        const startTime = DateTime.fromISO(naiveStartString, {
          zone: 'America/Bogota',
        });

        const naiveEndString = card.fechaFinal.slice(0, -1);

        const endTime = DateTime.fromISO(naiveEndString, {
          zone: 'America/Bogota',
        });

        return (
          <Card key={card.id}>
            <CardActionArea
              sx={{
                height: '100%',

                '&[data-active]': {
                  backgroundColor: 'action.selected',

                  '&:hover': {
                    backgroundColor: 'action.selectedHover',
                  },
                },
              }}
            >
              <CardContent sx={{ height: '100%' }}>
                <Typography variant="h5" component="div">
                  {card.servicio}
                </Typography>

                <Countdown date={startTime.toJSDate()} />

                <Typography variant="body2" color="text.secondary">
                  {startTime.toFormat('hh:mm a')} -{' '}
                  {endTime.toFormat('hh:mm a')}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Box>
  );
}

export default CardInfoCitas;
