import React, { useEffect, useState } from 'react';
import { PageContent } from './components/PageContent';
import './index.css'
import ThemeContext from './components/Contexts/ThemeContext';
import { ChangeTheme, SearchTheme } from './Hooks/usePersistedState';

export default function App() {
  const [theme, changeTheme] = useState('light');
  
  useEffect(() => {
    changeTheme(SearchTheme());
  }, [theme]);

  const SwitchTheme: any = () => {
    changeTheme(ChangeTheme(theme));
  };

  return (
    <ThemeContext.Provider value={{theme, ChangeTheme: SwitchTheme}}>
      <PageContent />
    </ThemeContext.Provider>
  )
}

