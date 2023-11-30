import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';

function RegistrarNegocio({ navigation }) {
  const BASE_URL = `http://10.0.5.30:3000`;

  const [nombreNegocio, setNombreNegocio] = useState('');
  const [calle, setCalle] = useState('');
  const [numeroDeCalle, setNumeroDeCalle] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [provincia, setProvincia] = useState('');

  const handleEnviar = () => {
    if (!nombreNegocio || !calle || !numeroDeCalle || !ciudad || !provincia) {
      Alert.alert('Campos Obligatorios', 'Todos los campos son obligatorios');
      return;
    }
    const datos = {
      nombreNegocio,
      calle,
      numeroDeCalle,
      city: ciudad,
      province: provincia,
    };

    fetch(`${BASE_URL}/api/negocios`, {
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
        Alert.alert('Negocio registrado correctamente', '', [
          { text: 'OK', onPress: () => navigation.navigate('InicioNegocio') },  // Aquí se realiza la navegación
        ]);
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
        Alert.alert('Error en la conexión al backend o la base de datos');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>VIBES</Text>
      <Text style={styles.commercialText}>comercial</Text>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Nombre de negocio"
          value={nombreNegocio}
          onChangeText={text => setNombreNegocio(text)}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          placeholder="Calle"
          value={calle}
          onChangeText={text => setCalle(text)}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          placeholder="Número de calle"
          value={numeroDeCalle}
          onChangeText={value => setNumeroDeCalle(value)}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          placeholder="Ciudad"
          value={ciudad}
          onChangeText={value => setCiudad(value)}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          placeholder="Provincia"
          value={provincia}
          onChangeText={value => setProvincia(value)}
          style={styles.input}
          placeholderTextColor="white"
        />

        <TouchableOpacity
          onPress={handleEnviar}
          style={styles.button}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#001AFF',
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
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'transparent',
    height: 50,
    justifyContent: 'center',
  },


  commercialText: {
    color: 'white',
    letterSpacing: 12, // Ajusta el espaciado según tu preferencia
    fontSize: 10,
    fontWeight: 'light',
  },
});

export default RegistrarNegocio;
