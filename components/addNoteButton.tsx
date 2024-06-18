import 'react-native-gesture-handler';
import { TouchableOpacity, StyleSheet } from 'react-native';
import * as React from 'react';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { useNavigation } from 'expo-router';
import {IconButton, MD3Colors } from 'react-native-paper';
import { TopTabParamList } from '@/types/pageTypes';


export default function AddNoteButton(){
  const navigation = useNavigation<NativeStackNavigationProp<TopTabParamList>>();

  return(
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.buttonContainer}
      onPress={() => {navigation.navigate('Notes')}}
    >
    <IconButton 
    icon="plus"
    containerColor='white'
    selected={true}
    size={50}
    style={styles.addButton}
    />
     </TouchableOpacity>
  )
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