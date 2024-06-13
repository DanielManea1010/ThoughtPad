import React, { useContext, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { ThemeContext } from '../hooks/ThemeContext';

function StatusBarComponent() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    StatusBar.setBarStyle(theme.dark ? 'light-content' : 'dark-content');
    StatusBar.setBackgroundColor(theme.colors.background);
  }, [theme]);

  return null;
}

export default StatusBarComponent;
