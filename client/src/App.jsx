import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar/Sidebar';
import RecordatorioCitas from './components/layout/RecordatorioCitas/RecordatorioCitas';
import MainComponent from './components/layout/Layout';

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Sidebar open={open} setOpen={setOpen} />
      <MainComponent open={open}/>      
      <RecordatorioCitas open={open}/>
    </div>
  );
}

export default App;
