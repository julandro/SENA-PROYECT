import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import api from '../services/api';
import { useAuth } from './AuthContext';

const CitasContext = createContext(null);

export const CitasProvider = ({ children }) => {
  const [citasProgramadas, setCitasProgramadas] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const getCitasProgramadas = async () => {
      const response = await api.post('/citas/getAllByUser', {
        userId: user._id,
      });

      console.log(response);
    };
    getCitasProgramadas();
  }, []);

  return (
    <CitasContext.Provider value={{ citasProgramadas, setCitasProgramadas }}>
      {children}
    </CitasContext.Provider>
  );
};

export const useCitas = () => {
  const context = useContext(CitasContext);
  if (!context) {
    throw new Error('useCitas must be used within an CitasProvider');
  }
  return context;
};
