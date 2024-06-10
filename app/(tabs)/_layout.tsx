import React, { useEffect, useLayoutEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialTopTabNavigationProp, createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '.';
import StatScreen from './statistics';
import CollectionsScreen from './collections';
import { TopTabParamList } from '../../types/pageTypes';

const Tab = createMaterialTopTabNavigator<TopTabParamList>();

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
    <NavigationContainer independent={true}><MyTabs /></NavigationContainer>
      
  );
}
