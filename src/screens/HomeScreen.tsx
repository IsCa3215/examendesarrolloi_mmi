import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { ValveGroup } from '../components/ValvesGroup';
import { useIrrigation } from '../context/ValveContext';

export const HomeScreen: React.FC = () => {
  const { valves } = useIrrigation();

  return (
    <ScrollView style={styles.container}>
      {valves.map((group, index) => (
        <ValveGroup // componente valves group
          key={index}// llave unica del mapeo
          name={group.name}// Se obtiene el nombre del grupo
          lastDate={group.lastDate}
          values={group.values}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
});