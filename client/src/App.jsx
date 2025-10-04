import React, { useState } from 'react';
import MainLayout from './components/layout/MainLayout';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/productos'></Route>
        <Route path='/facturas'></Route>
        <Route path='/citas'></Route>
        <Route path='/clientes'></Route>
        <Route path='/mascotas'></Route>
        <Route path='/empleados'></Route>
        <Route path='/gestiones-medicas'></Route>
        <Route path='/realizar-factura'></Route>
      </Route>
    </Routes>
  );
}

export default App;
