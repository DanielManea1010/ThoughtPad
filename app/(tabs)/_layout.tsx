import React, { useContext, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
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
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <PaperProvider>
        <StatusBarComponent/>
        <Stack.Navigator>
          <Stack.Screen name="MainTabs" component={MyTabs} options={{ headerShown: false }} />
          <Stack.Screen name="Notes" component={NoteScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </PaperProvider>
    </ThemeProvider>
  );
}
