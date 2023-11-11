import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

function InicioNegocio({ navigation }) {  // Asegúrate de desestructurar correctamente las props
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Hola!</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.paragraphText}>
          Aquí podrás gestionar tu negocio. Hemos diseñado un panel de control que lo hace todo más sencillo.
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.button, styles.smallButton]}
        onPress={() => navigation.navigate("DatosNegocio")} 
      >
        <Feather name="arrow-right" size={24} color="white" />
      </TouchableOpacity>
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
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  contentContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  paragraphText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: 'white',
    border: 5,  
    padding: 10,
  },
  smallButton: {
    marginTop: 20,
  },
});

export default InicioNegocio;
