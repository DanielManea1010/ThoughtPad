import 'react-native-gesture-handler';
import { Link } from 'expo-router';
import { Image, StyleSheet, View, Text } from 'react-native';
import * as React from 'react';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.firstText}>
        <Text style={{ textAlign: 'center' }}>This is the Home Screen!</Text>
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
});
