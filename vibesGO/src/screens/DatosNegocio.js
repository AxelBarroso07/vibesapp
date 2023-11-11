import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function DatosNegocio() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Hola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
});

export default DatosNegocio;
