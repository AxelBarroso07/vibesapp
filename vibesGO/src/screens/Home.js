import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, ImageBackground, StyleSheet, TouchableOpacity} from "react-native";
import backgroundImage from "../images/fondo.png";
import { Feather } from "@expo/vector-icons"; 

function Home({ navigation }) {
  
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [contrasenia, setContrasenia] = useState('');






  const BASE_URL = `http://192.168.0.14:3000`

  const handleEnviarGet = () => {
    fetch(`${BASE_URL}/api/usuarios`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error('La solicitud no fue exitosa');
        }
      })
      .then(result => {
        console.log('Respuesta del servidor:', result);
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
      });
  };

  const handleEnviar = () => {
    if (!nombre || !apellido || !email || !contrasenia ) {
      Alert.alert('Campos Obligatorios', 'Todos los campos son obligatorios');
      return;
    }
    const datos = {
      nombre,
      apellido,
      email,
      contrasenia,
    };

    
    
      navigation.navigate("ScreenRegistroDos", datos);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.titleText}>VIBES</Text>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Nombre"
            value={nombre}
            onChangeText={text => setNombre(text)}
            style={styles.input}
            placeholderTextColor={"white"}
          />
          <TextInput
            placeholder="Apellido"
            value={apellido}
            onChangeText={text => setApellido(text)}
            style={styles.input}
            placeholderTextColor={"white"}
          />
          <TextInput
            placeholder="Contraseña"
            value={contrasenia}
            onChangeText={text => setContrasenia(text)}
            style={styles.input}
            placeholderTextColor={"white"}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
            placeholderTextColor={"white"}
          />

<TouchableOpacity
  style={[styles.button, styles.smallButton]}
  onPress={() => handleEnviar({ nombre, apellido, email, contrasenia })}
>
  <Feather name="arrow-right" size={24} color="black" />
</TouchableOpacity>


<TouchableOpacity
  style={[styles.button, styles.smallButton, { backgroundColor: 'blue' }]}
  onPress={() => navigation.navigate('RegistrarNegocio')}
>
  <Text style={{ color: 'white', textAlign: 'center' }}>Colocar Negocio</Text>
</TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginBottom: 150,
  },
  titleText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    marginTop: 40,
  },
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: "white",
    marginBottom: 50, // Espaciado entre los inputs
    width: 250, // Establece el ancho en píxeles según tus necesidades
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
buttonText: {
  color: 'white',
  textAlign: 'center',
},
largeButton: {
    width: 300,
},
smallButton: {
    height: 45,
},
});

export default Home;
