/* eslint-disable no-use-before-define */
import * as React from 'react';
import MainScreen from 'screens/mainScreen';
import { useFonts } from 'expo-font';

// or any pure javascript modules available in npm

export default function App() {
  const [isLoaded] = useFonts({
    'beba-neue': require('assets/fonts/BebasNeue-Regular.ttf'),
    asap: require('assets/fonts/Asap-Medium.ttf'),
  });
  return isLoaded && <MainScreen />;
}
