import React, { useState } from "react";
import MainLayout from "./components/layout/MainLayout";
import { Routes, Route, Navigate } from "react-router-dom";
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
      <Route path="/" element={<MainLayout />}>
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
