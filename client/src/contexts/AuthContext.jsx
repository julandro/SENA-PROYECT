import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import api from '../services/api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const { data } = await api.post('/auth/refresh-token');
        const { user, accessToken } = data;
        console.log({ data });

        login(user, accessToken);
        setIsAuthLoading(false);
      } catch (error) {
        console.error('No se encontro una sesión activa', error);
      } finally {
        setIsAuthLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    setAccessToken(token);

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  const logout = async () => {
    setUser(null);
    setAccessToken(null);

    delete api.defaults.headers.common['Authorization'];

    await api.post('/auth/logout');
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{ user, accessToken, login, logout, isAuthLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
