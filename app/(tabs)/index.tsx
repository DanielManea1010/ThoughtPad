import { Image, StyleSheet, Platform } from 'react-native';

import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor: 'blue', flex:1}} />
      <View style={{backgroundColor: 'red', flex:1}} />
      <View style={styles.firstText}>
        <Text style={{textAlign:'center'}}>Helau</Text>
      </View>
    </View>
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
  firstText:{
    flex:1,
    justifyContent:'center', // Aliniază pe axa verticală
    alignItems:'center' // Aliniază pe axa orizontală
  }
});
