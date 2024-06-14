import React, { useContext } from 'react';
import { Switch } from 'react-native-paper';
import { ThemeContext } from '@/hooks/ThemeContext';
import AppDarkTheme from '../themes/appDarkTheme';


const SwitchButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const darkMode = theme === AppDarkTheme;

  return (
      <Switch
        value={!darkMode}
        onValueChange={toggleTheme}
      />
  );
};

export default SwitchButton;
