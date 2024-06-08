import React, { useState } from 'react';
import Clock from './Clock';
import LanguageContext from './LanguageContext';

const App = () => {
  const [language, setLanguage] = useState('english');

  return (
    <div>
      <h1>Language Selector</h1>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="french">French</option>
      </select>
      <LanguageContext.Provider value={language}>
        <Clock />
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
