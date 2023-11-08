import React from 'react';
import { Text, ScrollView, View, StyleSheet } from "react-native";
import Btn from "./Btn";

function ScreenDos({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
    
            <Btn texto="Ir al componente Uno" presionado={() => navigation.navigate("ScreenUno")} />
            <Btn texto="Ir al componente Uno" presionado={() => navigation.navigate("ScreenUno")} />
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
});

export default ScreenDos;
