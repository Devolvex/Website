import React from 'react';
import DevolvexLogo from './assets/devolvex_logo.png';
import './App.css';

function App() {
  return (
    <div className="dark-bg flex items-center justify-center h-screen">
      <div className="text-center">
        <img src={DevolvexLogo} className="max-w-sm mx-auto" alt="Devolvex logo" />
        <h1 className="text-4xl mt-6 text-white font-bold">Coming Soon</h1>
      </div>
    </div>
  );
}

export default App;
