// src/components/Dropdown.jsx
import React from "react";
import { useDropdown } from "../context/DropdownContext";
import "./Line.css"; // Import the Dropdown CSS

const Dropdown = () => {
  const { selectedCoin, setSelectedCoin } = useDropdown();

  const handleChange = (e) => {
    setSelectedCoin(e.target.value);
  };

  return (
    <div className="dropdown-container">
      <label className="label">Select a coin:</label>
      <select className="select" value={selectedCoin} onChange={handleChange}>
        <option value="ethereum">Ethereum</option>
        <option value="dogecoin">Dogecoin</option>
        <option value="solana">Solana</option>
        <option value="bitcoin">Bitcoin</option>
        <option value="arbitrum">Arbitrum</option>
        <option value="optimism">Optimism</option>
        <option value="cosmos">Cosmos</option>
        <option value="osmosis">Osmosis</option>
        <option value="aave">Aave</option>
        <option value="filecoin">Filecoin</option>
        <option value="cardano">Cardano</option>
        <option value="litecoin">Litecoin</option>
        <option value="chainlink">Chainlink</option>
        <option value="monero">Monero</option>
        <option value="mantle">Mantle</option>
        <option value="aptos">Aptos</option>
      </select>
    </div>
  );
};

export default Dropdown;
