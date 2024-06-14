import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import AddNote from '@/components/AddNoteButton';
import { ThemeContext } from '@/hooks/ThemeContext';
import AppDarkTheme from '../../themes/appDarkTheme';
import SwitchButton from '../../components/SwitchThemeButton';

export default function HomeScreen() {
  const { theme } = useContext(ThemeContext);
  const darkMode = theme === AppDarkTheme;
  console.log('Rendering HomeScreen, darkMode:', darkMode);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.header,{borderBottomWidth:1, borderBottomColor:'grey'} ]}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Thought Pad</Text>
        <View style={styles.switchContainer}>
          <Text style={[styles.themeText, { color: theme.colors.text }]}>
           {darkMode ? 'Dark Theme' : 'Light Theme'}
          </Text>
          <SwitchButton />
        </View>
      </View>
      <View style={styles.firstText}>
        <Text style={[styles.text, { color: theme.colors.text }]}>This is the Home Screen!</Text>
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
  themeText: {
    marginRight: 8,
  },
});
