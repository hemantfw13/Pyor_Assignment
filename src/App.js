// src/App.js
import React from 'react';
import './App.css';
import { DropdownProvider } from './context/DropdownContext';
import Dashboard from './component/Dashboard';
import Dropdown from './component/Dropdown';

function App() {
  return (
    <DropdownProvider>
      <div className="App">
      <Dropdown />

        <Dashboard />
      </div>
    </DropdownProvider>
  );
}

export default App;
