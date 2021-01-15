import React from 'react';
// import { Router } from 'react-router-dom';
import Router from './router'

function App() {
  return (
    <div>
      {/* <Navbar /> untuk kepentingan error handler */}
      <Router />
    </div>
  );
}

export default App;