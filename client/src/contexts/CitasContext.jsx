import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import api from '../services/api';
import { useAuth } from './AuthContext';

const CitasContext = createContext(null);

export const CitasProvider = ({ children }) => {
  const [citasProgramadas, setCitasProgramadas] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const getCitasProgramadas = async () => {
      const { data } = await api.post('/citas/getAllByUser', {
        userId: user._id,
      });
      console.log(citasProgramadas);
      const { result } = data;
      setCitasProgramadas([...result]);
    };
    getCitasProgramadas();
  }, [setCitasProgramadas, refresh]);

  return (
    <CitasContext.Provider
      value={{ citasProgramadas, setCitasProgramadas, setRefresh, refresh }}
    >
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
