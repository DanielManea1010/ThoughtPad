import React, { createContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLightTheme from '../themes/appLightTheme';
import AppDarkTheme from '../themes/appDarkTheme';

const defaultMode = Appearance.getColorScheme();

export const ThemeContext = createContext({
  theme: defaultMode === 'light' ? AppLightTheme : AppDarkTheme,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(defaultMode === 'dark');
  const theme = darkMode ? AppDarkTheme : AppLightTheme;

  useEffect(() => {
    // Load theme from storage
    AsyncStorage.getItem('darkMode').then((value) => {
      if (value !== null) {
        setDarkMode(value === 'true');
      }
    });

    // Listen to system theme changes
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setDarkMode(colorScheme === 'dark');
    });
    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      AsyncStorage.setItem('darkMode', newMode.toString());
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
