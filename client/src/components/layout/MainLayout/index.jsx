import React, { useState } from 'react';
import { Main } from './styles';
import Sidebar from './Sidebar';
import RecordatorioCitas from './RecordatorioCitas';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} />
      <Main component="main" open={open} sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Main>
      <RecordatorioCitas open={open} />
    </>
  );
}
