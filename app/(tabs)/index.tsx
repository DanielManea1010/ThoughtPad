import 'react-native-gesture-handler';
import { Link, useNavigation } from 'expo-router';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {IconButton, PaperProvider, MD3Colors } from 'react-native-paper';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { TopTabParamList } from '@/types/pageTypes';
import { useColorScheme } from 'react-native';
import LightTheme from '../../themes/LightTheme';
import DarkTheme from '../../themes/DarkTheme';


export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<TopTabParamList>>();
  const colorScheme = useColorScheme();
  
  return (
    <PaperProvider>
      <NavigationContainer independent={true}>
      <HomeScreen/>
      </NavigationContainer>
    </PaperProvider>
    
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
