import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenUno from './src/screens/ScreenUno';
import ScreenDos from './src/screens/ScreenDos';
import ScreenTres from './src/screens/ScreenTres';
import ScreenUnoB from './src/screens/ScreenUnoB';
import ComponenteUno from './src/componente/ComponenteUno';
import Home from './src/screens/Home';
import ScreenTarjeta from './src/screens/ScreenTarjeta';
import ScreenSistema from './src/screens/ScreenSistema';
import ScreenRegistroDos from './src/screens/ScreenRegistroDos';
import RegistrarNegocio from './src/screens/RegistrarNegocio';
import InicioNegocio from './src/screens/InicioNegocio';
import DatosNegocio from './src/screens/DatosNegocio';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home"
            options={{
              headerTitle: " ",
              headerShown: false,
            }} component={Home} />
          <Stack.Screen name="ScreenUno"
            options={{
              headerTitle: " ",
              headerShown: false,
            }} component={ScreenUno} />
          <Stack.Screen name="ComponenteUno"
            options={{
              headerTitle: " ",
              headerShown: false,
            }} component={ComponenteUno} />
          <Stack.Screen name="ScreenDos"
            options={{
              headerTitle: " ",
              headerShown: false,
            }} component={ScreenDos} />
          <Stack.Screen name="ScreenTres"
            options={{
              headerTitle: " ",
              headerShown: false,
            }} component={ScreenTres} />
          <Stack.Screen name="ScreenUnoB"
            options={{
              headerTitle: " ",
              headerShown: false,
            }} component={ScreenUnoB} />
          <Stack.Screen name="ScreenTarjeta"
            options={{
              headerTitle: " ",
              headerShown: false,
            }} component={ScreenTarjeta} />
             <Stack.Screen name="ScreenSistema"
            options={{
              headerTitle: " ",
              headerShown: false,
            }} component={ScreenSistema} />
            <Stack.Screen name="ScreenRegistroDos"
            options={{
              headerTitle: " ",
              headerShown: false,
            }} component={ScreenRegistroDos} />
            <Stack.Screen name="RegistrarNegocio"
            options={{
              headerTitle: " ",
              headerShown: false,
            }} component={RegistrarNegocio} />
            <Stack.Screen name="InicioNegocio"
            options={{
              headerTitle: " ",
              headerShown: false,
            }} component={InicioNegocio} />
            <Stack.Screen name="DatosNegocio"
            options={{
              headerTitle: " ",
              headerShown: false,
            }} component={DatosNegocio} />
            
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
