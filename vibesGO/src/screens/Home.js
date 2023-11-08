import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, ImageBackground, StyleSheet } from "react-native";
import backgroundImage from "../images/fondo.png";

function Home({ navigation }) {
  
  const [nombre, setNombre] = useState('');
  const [calle, setCalle] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  const handleEnviarGet = () => {
    fetch('http://192.168.0.14:3000/api/usuarios', {
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
    if (!nombre || !apellido || !email || !calle || !contrasenia) {
      Alert.alert('Campos Obligatorios', 'Todos los campos son obligatorios');
      return;
    }
    const datos = {
      nombre: nombre,
      apellido: apellido,
      calle: calle,
      email: email,
      contrasenia: contrasenia,
    };

    fetch('http://192.168.0.14:3000/api/usuarios', {
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
          <TextInput
            placeholder="Domicilio"
            value={calle}
            onChangeText={text => setCalle(text)}
            style={styles.input}
            placeholderTextColor={"white"}
          />

          <Button
            title="Registrar"
            onPress={handleEnviar}
            color="transparent"
            style={styles.button}
          />

<Button
            title="Iniciar Sesión"
            onPress={() => {
              if (!email || !contrasenia) {
                Alert.alert('Campos Obligatorios', 'Email y contraseña son obligatorios');
                return;
              }
              const datos = {
                email: email,
                contrasenia: contrasenia,
              };

              // Realiza una solicitud de inicio de sesión al servidor
              fetch('http://192.168.0.14:3000/api/login', {
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
                    throw new Error('Inicio de sesión fallido');
                  }
                })
                .then(result => {
                  console.log('Respuesta del servidor:', result);
                  // Realiza la navegación a la pantalla "IniciarSesion" después de iniciar sesión
                  navigation.navigate('ScreenSesion');
                })
                .catch(error => {
                  console.error('Error en el inicio de sesión:', error);
                  Alert.alert('Error en el inicio de sesión');
                });
            }}
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
});

export default Home;
