import React, { useState } from "react";
import { View, Text, TextInput, Alert, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import backgroundImage from "../../images/fondo.png";
import { Feather } from "@expo/vector-icons";

async function loginUser(email, password) {
  // Aquí deberías implementar la lógica para autenticar al usuario
  // Puedes retornar una promesa que se resuelve cuando la operación asincrónica está completa
}

function LoginUser({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Campos Obligatorios', 'Todos los campos son obligatorios');
      return;
    }

    try {
      const loginData = await loginUser(email, password);
      // A donde vamos ? 
      navigation.navigate("RegistryStepTwo", { email, password });
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      // Manejar el error, mostrar una alerta, etc.
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.titleText}>VIBES</Text>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
            placeholderTextColor={"white"}
          />
          <TextInput
            placeholder="Contraseña"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            placeholderTextColor={"white"}
            secureTextEntry={true} // Para ocultar la contraseña
          />

          <TouchableOpacity
            style={[styles.button, styles.smallButton]}
            onPress={handleLogin}
          >
            <Feather name="arrow-right" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.smallButton, { backgroundColor: 'blue' }]}
            onPress={() => navigation.navigate('RegistrarNegocio')}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Iniciar como negocio</Text>
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

export default LoginUser;
