import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const PublicRoutes = ({ children }) => {
  const { isAuthLoading, accessToken } = useAuth();

  if (isAuthLoading) return <p>Cargando...</p>;

  return accessToken ? <Navigate to="/" replace /> : children;
};

export default PublicRoutes;
