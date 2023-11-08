import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ScreenSistema = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>SISTEMA DE PUNTOS</Text>
      <Text style={styles.paragraph}>
        En nuestro sistema de puntos, hemos diseñado un emocionante programa de recompensas que tiene como objetivo hacer que sus compras sean aún más gratificantes.
      </Text>
      <Text style={styles.paragraph}>
        Cuando realiza una compra por un valor superior a 10,000 pesos, automáticamente ganará <Text style={styles.bold}>10 puntos.</Text> Estos puntos se suman a su cuenta y pueden utilizarse en futuras compras para obtener descuentos adicionales.
      </Text>
      <Text style={styles.paragraph}>
        Pero eso no es todo: queremos que su experiencia de compra con nosotros sea excepcional y atractiva. Por eso, hemos creado un sistema de niveles y emocionantes eventos especiales para llevar su satisfacción al siguiente nivel.
      </Text>
      <Text style={styles.bold}>Niveles de Membresía:</Text>
      <Text style={styles.paragraph}>
        Con nuestros niveles de membresía, usted no solo gana puntos, sino que también desbloquea beneficios adicionales. A medida que acumula más puntos, avanzará a niveles superiores que le otorgan recompensas aún más atractivas. Estos beneficios pueden incluir envío gratuito, acceso exclusivo a ventas anticipadas, descuentos más generosos y más.
      </Text>
      <Text style={styles.bold}>Eventos Especiales:</Text>
      <Text style={styles.paragraph}>
        En diversas ocasiones, organizamos eventos especiales para celebrar su lealtad. Durante estos eventos, puede ganar puntos adicionales de manera más rápida o recibir descuentos exclusivos. Por ejemplo, podríamos tener un "Día Doble de Puntos" en el que cada compra le otorga el doble de puntos, o una "Semana de Puntos Extra" donde sus compras acumulan aún más puntos de lo habitual. Estos eventos hacen que sus compras sean aún más emocionantes y gratificantes.
      </Text>
      <Text style={styles.paragraph}>
        Nuestro objetivo es que cada compra sea una experiencia especial y que sienta el valor de su lealtad. Esperamos que este sistema de puntos, con sus niveles de membresía y eventos especiales, le brinde beneficios significativos y le haga sentir apreciado por ser parte de nuestra comunidad de compras. ¡Estamos emocionados de que se una a nosotros en esta emocionante aventura de compras!
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center', // Centra el contenido verticalmente
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },

  bold: {
    fontWeight: 'bold',
  },
});

export default ScreenSistema;
