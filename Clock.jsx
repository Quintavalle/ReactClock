import React, { useState, useContext } from 'react';

// Create the LanguageContext
const LanguageContext = React.createContext();

// Clock component
const Clock = () => {
  // Consume LanguageContext
  const language = useContext(LanguageContext);

  const getTimeMessage = () => {
    switch (language) {
      case 'english':
        return 'Current Time:';
      case 'spanish':
        return 'Hora actual:';
      case 'french':
        return 'Heure actuelle:';
      default:
        return 'Current Time:';
    }
  };

  return (
    <div>
      <p>{getTimeMessage()}</p>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  );
};


