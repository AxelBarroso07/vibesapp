import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function DatosNegocio() {
  const BASE_URL = `http://192.168.0.14:3000`;
  const [datosNegocio, setDatosNegocio] = useState(null);

  useEffect(() => {
    // Realizar la solicitud al servidor para obtener los datos del negocio
    fetch(`${BASE_URL}/api/negocios/datos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('La solicitud no fue exitosa');
        }
      })
      .then(result => {
        console.log('Datos del negocio obtenidos:', result);
        setDatosNegocio(result.negocio); // Asumiendo que la estructura del resultado es { negocio: {} }
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
        // Manejar el error según tus necesidades
      });
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
