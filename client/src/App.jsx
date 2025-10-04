import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Proteccion
import ProtectRoutes from "./components/auth/ProtectRoutes";

// Layouts
import AuthLayout from "./components/layout/AuthLayout";
import MainLayout from "./components/layout/MainLayout";

// Pages
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Productos from "./components/pages/Productos";
import Facturas from "./components/pages/Facturas";
import Citas from "./components/pages/Citas";
import Clientes from "./components/pages/Clientes";
import Mascotas from "./components/pages/Mascotas";
import Empleados from "./components/pages/Empleados";
import GestionesMedicas from "./components/pages/GestionesMedicas";
import RealizarFactura from "./components/pages/RealizarFactura";

function App() {
  return (
    <Routes>
      {/* Rutas Públicas */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Route>

      {/* Rutas Protegidas */}
      <Route
        path="/"
        element={
          <ProtectRoutes>
            <MainLayout />
          </ProtectRoutes>
        }
      >
        <Route path="/productos" element={<Productos />}></Route>
        <Route path="/facturas" element={<Facturas />}></Route>
        <Route path="/citas" element={<Citas />}></Route>
        <Route path="/clientes" element={<Clientes />}></Route>
        <Route path="/mascotas" element={<Mascotas />}></Route>
        <Route path="/empleados" element={<Empleados />}></Route>
        <Route path="/gestiones-medicas" element={<GestionesMedicas />}></Route>
        <Route path="/realizar-factura" element={<RealizarFactura />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
