import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DataValve } from '../responses/DataValve';

export const ValveGroup: React.FC<DataValve> = ({ name, values }) => {
  return (// componente de valvulas
    <View style={styles.container}>
      <Text style={styles.groupTitle}>{name}</Text>
      {values.map((valve, index) => (
        <View key={index}>
          <Text>{valve.name}</Text>
          <Text>{valve.state ? 'Activo' : 'Inactivo'}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#f0f0f0'
  }
});