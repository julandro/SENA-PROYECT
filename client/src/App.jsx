import React, { useState } from 'react';
import Navbar from './components/Navbar';
import RecordatorioCitas from './components/RecordatorioCitas';
import MainComponent from './components/MainComponent';

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Navbar open={open} setOpen={setOpen} />
      <MainComponent open={open}/>      
      <RecordatorioCitas open={open}/>
    </div>
  );
}

export default App;
