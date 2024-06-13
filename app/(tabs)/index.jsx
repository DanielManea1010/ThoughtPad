import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import { useColorScheme, StyleSheet, Appearance } from 'react-native';
import HomeScreen from './home';
import { ThemeProvider } from '../../hooks/ThemeContext';


export default function App() {
  return (
    <TabLayout />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  firstText: {
    flex: 1,
    justifyContent: 'center', // Align on the vertical axis
    alignItems: 'center', // Align on the horizontal axis
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Align on the vertical axis
    alignItems: 'center', // Align on the horizontal axis,
  },
  addButton:{
    backgroundColor:"#00A300",
  },
  buttonContainer:{
    alignSelf: 'flex-end',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
