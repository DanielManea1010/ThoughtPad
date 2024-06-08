import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StatScreen from './statistics';
import HomeScreen from '.';
import CollectionsScreen from './collections';

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

export function HomeTabs() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Statistics" component={StatScreen} />
      <TopTab.Screen name="Home" component={HomeScreen} />
      <TopTab.Screen name="Collections" component={CollectionsScreen} />
    </TopTab.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="HomeTabs" component={HomeTabs} />
        {/* Add other screens if needed */}
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}