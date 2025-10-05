import React from 'react';
import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

const LoginContainer = styled('div')({
  background: '#e9e9e9ff',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
});

const AuthLayout = () => {
  return (
    <LoginContainer>
      <Outlet />
    </LoginContainer>
  );
};

export default AuthLayout;
