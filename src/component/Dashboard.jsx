// src/components/Dashboard.jsx
import React from 'react';
import LineChart from './LineChart';
import { useDropdown } from '../context/DropdownContext'; 
import './Line.css';

const Dashboard = () => {
  const { selectedCoin } = useDropdown(); 

  return (
    <div className="dashboard">
      <div className="component">
        <LineChart selectedCoin={selectedCoin} />
      </div>
    </div>
  );
};

export default Dashboard;
