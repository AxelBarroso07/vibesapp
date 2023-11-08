import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Btn from "./Btn";
import { Feather } from '@expo/vector-icons';

function ScreenUno({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, styles.largeButton]}
                onPress={() => navigation.navigate("ScreenTarjeta")}
            >
                <Text style={styles.title}>Agregar tarjeta de crédito o débito</Text>
                <Text style={[styles.text, styles.textMargin]}>Agrega tu tarjeta para obtener beneficios.</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.largeButton]}
                onPress={() => navigation.navigate("ScreenSistema")}
            >
                <Text style={styles.title}>Sistema de puntos</Text>
                <Text style={[styles.text, styles.textMargin]}>Obten puntos y gana beneficios. Saber más...</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.smallButton]}
                onPress={() => navigation.navigate("ScreenUnoB")} 
            >
                <Feather name="arrow-right" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'transparent',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        border: 5,
        height: 150,
    },
    largeButton: {
        width: 300,
    },
    smallButton: {
        height: 45,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
    },
    textMargin: {
        marginTop: 20,
        marginLeft: 10,
    },
});

export default ScreenUno;
