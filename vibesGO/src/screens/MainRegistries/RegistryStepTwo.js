import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import createUser from '../../api/vibesGoApi';
import backgroundImage from '../../images/fondo.png';


function RegistryStepTwo({ route, navigation }) {
  const { nombre, apellido, email, contrasenia } = route.params;

  const [calle, setCalle] = useState('');
  const [numeroDeCalle, setNumeroDeCalle] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [provincia, setProvincia] = useState('');

  const handleEnviar = async () => {

    console.log("llegue")
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

    const {success, error} = await createUser(datos)

    if(error) {
      Alert.alert(error.message);
    }

    if(success) {
      Alert.alert(success.message, '', [
        { text: 'OK', onPress: () => navigation.navigate('ScreenUno') },
      ]);
    }
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

export default RegistryStepTwo;
