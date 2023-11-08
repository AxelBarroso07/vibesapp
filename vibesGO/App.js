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
import ScreenSesion from './src/screens/ScreenSesion';

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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
