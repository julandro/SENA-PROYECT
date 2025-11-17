import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useAuth } from '../../../contexts/AuthContext';
import LogoBlack2 from '../../../assets/img/LogoBlack2.png';
const Inicio = () => {
  const { user } = useAuth();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      height="100vh"
    >
      {/* LOGO ARRIBA */}
      <motion.img
        src={LogoBlack2}
        alt="logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{ width: 150 }}
      />

      {/* CENTRO */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Bienvenido {user.username}
      </motion.h1>

      {/* ESPACIO FINAL (vacío) */}
      <div style={{ height: 150 }} />
    </Box>
  );
};

export default Inicio;
