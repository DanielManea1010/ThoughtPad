import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Switch } from 'react-native';
import AddNote from '@/components/AddNoteButton';
import { ThemeContext } from '@/hooks/ThemeContext';
import AppDarkTheme from '../../themes/appDarkTheme';

export default function HomeScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const darkMode = theme === AppDarkTheme;
  console.log(theme);
  console.log('Rendering HomeScreen, darkMode:', darkMode);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.firstText}>
        <Text style={[styles.text, { color: theme.colors.text }]}>This is the Home Screen!</Text>
        <Text style={[styles.text, { color: theme.colors.text }]}>Color scheme: {darkMode ? 'dark' : 'light'}</Text>
        <Switch
          value={darkMode}
          onValueChange={() => {
            console.log('Switch pressed');
            toggleTheme();
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AddNote />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
