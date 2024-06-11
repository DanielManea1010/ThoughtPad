import React, { useEffect, useLayoutEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialTopTabNavigationProp, createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '.';
import StatScreen from './statistics';
import CollectionsScreen from './collections';
import { TopTabParamList } from '../../types/pageTypes';
import NoteScreen from '@/components/addNote';

const Tab = createMaterialTopTabNavigator<TopTabParamList>();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'white' },
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
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="MainTabs" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Notes" component={NoteScreen} options={{ title: 'Add Note' }} />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}
