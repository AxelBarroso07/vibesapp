import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function DatosNegocio(props) {

  const {route: {params}} = props

  console.log("PROPERTIES", params)

  const BASE_URL = `http://192.168.0.11:3000`;
  const [datosNegocio, setDatosNegocio] = useState(null);

  useEffect(() => {
   setDatosNegocio(params)
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>VIBES</Text>
      <Text style={styles.commercialText}>comercial</Text>
      {datosNegocio ? (
        <View>
          <Text>{`Nombre del Negocio: ${datosNegocio.nombreNegocio}`}</Text>
          <Text>{`Calle: ${datosNegocio.calle}`}</Text>
          <Text>{`Número de Calle: ${datosNegocio.numeroDeCalle}`}</Text>
         
          {/* Agrega más campos según la estructura de tus datos */}
        </View>
      ) : (
        <Text>Cargando datos del negocio...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 40,
  },
  commercialText: {
    color: '#000',
    letterSpacing: 12,
    fontSize: 10,
    fontWeight: 'light',
  },
});

export default DatosNegocio;
