import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { setupInterceptos } from '../../services/api';

function ProtectRoutes({ children }) {
  const { accessToken, logout, isAuthLoading } = useAuth();
  useEffect(() => {
    setupInterceptos(logout);
  }, [logout]);

  if (isAuthLoading) return <p>Cargando...</p>;

  // Si no está autenticado
  return accessToken ? children : <Navigate to="/login" replace />;
}

export default ProtectRoutes;
