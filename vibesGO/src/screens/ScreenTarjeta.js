import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

function ScreenTarjeta() {
  const [cardNumber, setCardNumber] = useState('');
  const [formattedCardNumber, setFormattedCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [cardType, setCardType] = useState('');

  // Función para detectar el tipo de tarjeta
  const detectCardType = (cardNumber) => {
    if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(cardNumber)) {
      return 'visa';
    } else if (/^5[1-5][0-9]{14}$/.test(cardNumber)) {
      return 'mastercard';
    } else {
      return '';
    }
  };

  const handleSaveCard = () => {
    // Detectar el tipo de tarjeta
    const type = detectCardType(cardNumber);
    setCardType(type);

    // Formatear el número de tarjeta en grupos de 4 dígitos
    const formattedNumber = cardNumber.match(/.{1,4}/g).join(' ');
    setFormattedCardNumber(formattedNumber);

    // Aquí puedes agregar la lógica para guardar la tarjeta en tu aplicación
    console.log('Número de tarjeta:', cardNumber);
    console.log('Nombre en la tarjeta:', cardName);
    console.log('Fecha de expiración:', cardExpiry);
    console.log('CVV:', cardCVV);
    console.log('Tipo de tarjeta:', type);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={
            cardType === 'visa'
              ? require('../images/visalogo.png')
              : cardType === 'mastercard'
              ? require('../images/mastercardlogo.png')
              : null
          }
          resizeMode="contain"
        />
        
        <TextInput
          style={styles.cardInput}
          placeholder="XXXX XXXX XXXX XXXX"
          placeholderTextColor="white"
          value={formattedCardNumber} // Mostrar el número formateado
          onChangeText={(text) => {
            // Eliminar espacios en blanco y formatear el número
            const unformattedText = text.replace(/ /g, '');
            setCardNumber(unformattedText);
            setFormattedCardNumber(text);
          }}
          keyboardType="numeric"
        />
       
        <TextInput
          style={styles.cardInput}
          placeholder="Nombre Completo"
          placeholderTextColor="white"
          value={cardName}
          onChangeText={setCardName}
        />
        <View style={styles.cardInputRow}>
          <View>
            <TextInput
              style={styles.cardInput}
              placeholder="MM/YY"
              placeholderTextColor="white"
              value={cardExpiry}
              onChangeText={setCardExpiry}
            />
          </View>
          <View>
            <TextInput
              style={styles.cardInput}
              placeholder="XXX"
              placeholderTextColor="white"
              value={cardCVV}
              onChangeText={setCardCVV}
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveCard}>
          <Text style={styles.saveButtonText}>Guardar Tarjeta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  card: {
    width: 350,
    borderRadius: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 20,
  },
  cardImage: {
    height: 30,
  },
  cardInputTitle: {
    fontSize: 14,
    color: 'white',
  },
  cardInput: {
    height: 40,
    width: '100%',
    margin: 10,
    padding: 10,
    color: 'white',
  },
  cardInputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  saveButton: {
    backgroundColor: 'transparent',
    padding: 15,
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 1,
    border: 5,
  },
  saveButtonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default ScreenTarjeta;
