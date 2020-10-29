/* eslint-disable no-use-before-define */
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// You can import from local files
import Constants from 'expo-constants';
import MainScreen from '@screens/mainScreen';

// or any pure javascript modules available in npm

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
