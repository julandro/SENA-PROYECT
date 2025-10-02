import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import WorkIcon from '@mui/icons-material/Work';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import { DrawerHeader, Drawer } from './Sidebar.styles';



const listLinks = [
  {
    label: 'Inicio',
    icon: <HomeIcon />,
    active: true,
    importance: 1,
  },
  {
    label: 'Productos',
    icon: <InventoryIcon />,
    active: true,
    importance: 2,
  },
  {
    label: 'Facturas',
    icon: <ReceiptLongRoundedIcon />,
    active: true,
    importance: 2,
  },
  {
    label: 'Citas',
    icon: <CalendarMonthRoundedIcon />,
    active: true,
    importance: 2,
  },
  {
    label: 'Clientes',
    icon: <PeopleAltRoundedIcon />,
    active: true,
    importance: 2,
  },
  {
    label: 'Mascotas',
    icon: <PetsRoundedIcon />,
    active: true,
    importance: 2,
  },
  {
    label: 'Empleados',
    icon: <WorkIcon />,
    active: true,
    importance: 2,
  },
  {
    label: 'Gestiones Medicas',
    icon: <MonitorHeartIcon />,
    active: true,
    importance: 2,
  },
  {
    label: 'Realizar Factura',
    icon: <PointOfSaleIcon />,
    active: true,
    importance: 3,
  },
];

export default function Sidebar({ open, setOpen }) {
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {open ? (
            <>
              <img src="" alt="Lucky GVO" style={{ margin: 'auto' }} />
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </>
          ) : (
            <IconButton onClick={handleDrawerOpen} sx={{ margin: 'auto' }}>
              <MenuIcon />
            </IconButton>
          )}
        </DrawerHeader>
        <List>
          {open ? (
            <>
              <ListItem
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    justifyContent: 'space-between',
                  },
                ]}
              >
                <Avatar alt="Remy Sharp" sx={{ width: 30, height: 30 }} />
                <Box sx={{ width: 180, maxWidth: 180, overflow: 'hidden' }}>
                  <Typography variant="subtitle2" noWrap sx={{ ml: 2.4 }}>
                    Julian Camacho
                  </Typography>
                </Box>
                <IconButton sx={{ ml: 1.5, scale: 0.9 }}>
                  <LogoutIcon />
                </IconButton>
              </ListItem>
              <ListItem
                sx={[
                  {
                    mt: -2,
                    minHeight: 8,
                    px: 2.5,
                    justifyContent: 'space-evenly',
                  },
                ]}
              >
                <IconButton sx={{ ml: 1.5, scale: 0.9 }}>
                  <Badge color="secondary" badgeContent={1} max={99}>
                    <NotificationsIcon />
                  </Badge>
                </IconButton>

                <IconButton sx={{ ml: 1.5, scale: 0.9 }}>
                  <InfoIcon />
                </IconButton>
                <IconButton sx={{ ml: 1.5, scale: 0.9 }}>
                  <SettingsIcon />
                </IconButton>
              </ListItem>
            </>
          ) : (
            <ListItemButton
              sx={{
                minHeight: 48,
                m: 'auto',
              }}
            >
              <Avatar alt="Remy Sharp" sx={{ width: 30, height: 30 }} />
            </ListItemButton>
          )}
        </List>

        <Divider />
        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%', // para que ocupe todo el sidebar
          }}
        >
          {listLinks
            .filter((link) => link.active)
            .map((link, index, arr) => (
              <>
                {index > 0 && link.importance !== arr[index - 1].importance && (
                  <>
                    <Divider sx={{ my: 1 }} />
                  </>
                )}
                <ListItem
                  key={link.label}
                  disablePadding
                  sx={{
                    display: 'block',
                  }}
                >
                  <ListItemButton
                    sx={[
                      {
                        minHeight: 48,
                        px: 2.5,
                      },
                      open
                        ? {
                            justifyContent: 'initial',
                          }
                        : {
                            justifyContent: 'center',
                          },
                    ]}
                  >
                    <ListItemIcon
                      sx={[
                        {
                          minWidth: 0,
                          justifyContent: 'center',
                        },
                        open
                          ? {
                              mr: 3,
                            }
                          : {
                              mr: 'auto',
                            },
                      ]}
                    >
                      {link.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={link.label}
                      sx={[
                        open
                          ? {
                              opacity: 1,
                            }
                          : {
                              opacity: 0,
                            },
                      ]}
                    />
                  </ListItemButton>
                </ListItem>
                {index === arr.length - 1 ? <Divider sx={{ my: 1 }} /> : null}
              </>
            ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
