import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import HomeScreen from '.';
import StatScreen from './statistics';
import CollectionsScreen from './collections';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: 'white' },
      }} 
      tabBarPosition='bottom'>
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
  return (
    <MyTabs />
  );
}
