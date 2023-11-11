import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import backgroundImage from '../images/fondo.png';



function ScreenRegistroDos({ route, navigation }) {
    const { nombre, apellido, email, contrasenia } = route.params;
    const BASE_URL = `http://192.168.0.14:3000`
    
  const [calle, setCalle] = useState('');
  const [numeroDeCalle, setNumeroDeCalle] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [provincia, setProvincia] = useState('');

  const handleEnviar = () => {
    if (!calle || !numeroDeCalle || !ciudad || !provincia) {
      Alert.alert('Campos Obligatorios', 'Todos los campos son obligatorios');
      return;
    }
    const datos = {

      numeroDeCalle,
      ciudad,
      calle,
      provincia,
       nombre, 
       apellido,
        email,
         contrasenia 


    };

    fetch(`${BASE_URL}/api/usuarios`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('La solicitud no fue exitosa');
        }
      })
      .then(result => {
        console.log('Respuesta del servidor:', result);
        Alert.alert('Usuario agregado correctamente', '', [
          { text: 'OK', onPress: () => navigation.navigate('ScreenUno') },
        ]);
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
        Alert.alert('Error en la conexión al backend o la base de datos');
      });
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.titleText}>VIBES</Text>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Calle"
            value={calle}
            onChangeText={(text) => setCalle(text)}
            style={styles.input}
            placeholderTextColor="white"
          />
          <TextInput
            placeholder="Número de calle"
            value={numeroDeCalle}
            onChangeText={(value) => setNumeroDeCalle(value)}
            style={styles.input}
            placeholderTextColor="white"
          />
          <TextInput
            placeholder="Ciudad"
            value={ciudad}
            onChangeText={(value) => setCiudad(value)}
            style={styles.input}
            placeholderTextColor="white"
          />
          <TextInput
            placeholder="Provincia"
            value={provincia}
            onChangeText={(value) => setProvincia(value)}
            style={styles.input}
            placeholderTextColor="white"
          />

          <Button
            title="Registrar"
            onPress={handleEnviar}
            color="transparent"
            style={styles.button}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 150,
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 40,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: 'white',
    marginBottom: 50,
    width: 250,
    fontSize: 20,
  },
  button: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    border: 5,
    height: 150,
  },
});

export default ScreenRegistroDos;
