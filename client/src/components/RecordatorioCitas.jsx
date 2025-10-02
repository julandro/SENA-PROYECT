import React, { useRef, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import CardInfoCitas from "./CardInfoCitas";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import IconButton from "@mui/material/IconButton";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, isCitasShowing }) => ({
  //height: "120px",
  top: "auto",
  bottom: 0,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    width: `calc(100% - (${theme.spacing(7)} + 1px))`,
    marginLeft: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - (${theme.spacing(8)} + 1px))`,
      marginLeft: `calc(${theme.spacing(8)} + 1px)`,
    },
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }),
  ...(!isCitasShowing && {
    overflowY: "auto",
    transform: "translateY(100%)",
    transition: "transform 0.3s ease-in-out",
  }),
  ...(isCitasShowing && {
    overflowY: "auto",
    transform: "translateY(0)",
    transition: "transform 0.3s ease-in-out",
  }),
}));

const BoxToggleButton = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, isCitasShowing }) => ({
  position: "fixed",
  bottom: isCitasShowing ? "120px" : "0px", // 👈 cambia entre 122px y 0px
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "black",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.background.paper,
  transition: "bottom 0.3s ease-in-out, margin 0.3s ease-in-out", // 👈 animación de bottom
  ...(open && {
    marginLeft: drawerWidth,
  }),
  ...(!open && {
    marginLeft: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      marginLeft: `calc(${theme.spacing(8)} + 1px)`,
    },
  }),
}));

export default function RecordatorioCitas({ open }) {
  const [isCitasShowing, setIsCitasShowing] = useState(true);
  return (
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
          sx={{ ml: 10, cursor: "pointer", mr: 2 }}
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
        sx={{ background: "transparent" }}
      >
        <CardInfoCitas />
      </AppBar>
    </>
  );
}
