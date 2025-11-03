import React from 'react';
import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const LoginContainer = styled('div')({
  background: '#e9e9e9ff',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
});

const AuthLayout = () => {
  const [alert, setAlert] = useState(null);
  return (
    <LoginContainer>
      <Outlet context={{ alert, setAlert }} />
      {alert}
    </LoginContainer>
  );
};

export default AuthLayout;
