import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

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

function CardInfoCitas() {
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
      {cards.map((card, index) => (
        <Card>
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
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default CardInfoCitas;
