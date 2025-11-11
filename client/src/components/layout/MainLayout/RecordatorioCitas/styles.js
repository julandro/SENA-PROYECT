import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
const drawerWidth = 240;

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => !['open', 'isCitasShowing'].includes(prop),
})(({ theme, open, isCitasShowing }) => ({
  //height: "120px",
  top: 'auto',
  bottom: 0,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    width: `calc(100% - (${theme.spacing(7)} + 1px))`,
    marginLeft: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - (${theme.spacing(8)} + 1px))`,
      marginLeft: `calc(${theme.spacing(8)} + 1px)`,
    },
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }),
  ...(!isCitasShowing && {
    overflowY: 'auto',
    transform: 'translateY(100%)',
    transition: 'transform 0.3s ease-in-out',
  }),
  ...(isCitasShowing && {
    overflowY: 'auto',
    transform: 'translateY(0)',
    transition: 'transform 0.3s ease-in-out',
  }),
}));

export const BoxToggleButton = styled(Box, {
  shouldForwardProp: (prop) => !['open', 'isCitaShowing'].includes(prop),
})(({ theme, open, isCitasShowing }) => ({
  position: 'fixed',
  bottom: isCitasShowing ? '120px' : '0px', // 👈 cambia entre 122px y 0px
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'black',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.background.paper,
  transition: 'bottom 0.3s ease-in-out, margin 0.3s ease-in-out', // 👈 animación de bottom
  ...(open && {
    marginLeft: drawerWidth,
  }),
  ...(!open && {
    marginLeft: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      marginLeft: `calc(${theme.spacing(8)} + 1px)`,
    },
  }),
}));
