import React, { useContext, useEffect, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './home';
import StatScreen from './statistics';
import CollectionsScreen from './collections';
import { TopTabParamList } from '../../types/pageTypes';
import NoteScreen from '@/app/(tabs)/note';
import { ThemeProvider, ThemeContext } from '../../hooks/ThemeContext';
import { PaperProvider } from 'react-native-paper';
import StatusBarComponent from '@/components/StatusBar';
import { NotesProvider } from '../../hooks/NotesContext';
import { initDB, getNotes } from '@/database/sqliteUtils';

const Tab = createMaterialTopTabNavigator<TopTabParamList>();
const Stack = createNativeStackNavigator();

function MyTabs() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12, color:theme.colors.text },
        tabBarStyle: { backgroundColor: theme.colors.background },
      }}
      tabBarPosition="bottom"
    >
      <Tab.Screen
        name="Statistics"
        component={StatScreen}
        options={{ tabBarLabel: 'Statistics' }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Collections"
        component={CollectionsScreen}
        options={{ tabBarLabel: 'Collections' }}
      />
    </Tab.Navigator>
  );
}

export default function TabLayout() {

  useEffect(() => {
    const initializeDatabase = async () => {
      // Inițializează baza de date
      await initDB();

      // Citește înregistrările și afișează-le în consolă
      const notes = await getNotes();
      console.log('Notes:', notes);
    };

    initializeDatabase();
  }, []);

  return (
    <ThemeProvider>
      <PaperProvider>
        <NotesProvider>
        <StatusBarComponent/>
        <Stack.Navigator>
          <Stack.Screen name="MainTabs" component={MyTabs} options={{ headerShown: false }} />
          <Stack.Screen name="Notes" component={NoteScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
        </NotesProvider>
      </PaperProvider>
    </ThemeProvider>
  );
}
