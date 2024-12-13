import React from 'react';
import { SafeAreaView } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { IrrigationProvider } from './src/context/ValveContext';

export default function App() {
  return (
    <IrrigationProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <HomeScreen />
    </SafeAreaView>
  </IrrigationProvider>
  );
}