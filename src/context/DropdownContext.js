import React, { createContext, useContext, useState } from 'react';

const DropdownContext = createContext();

export const DropdownProvider = ({ children }) => {
  const [selectedCoin, setSelectedCoin] = useState('ethereum'); // Default value

  return (
    <DropdownContext.Provider value={{ selectedCoin, setSelectedCoin }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('useDropdown must be used within a DropdownProvider');
  }
  return context;
};
