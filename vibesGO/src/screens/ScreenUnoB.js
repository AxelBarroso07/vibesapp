import {React, useState, useEffect} from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import {getStoresToClosed} from '../api/vibesGoApi'


function ScreenUnoB({ navigation, route: {params} }) {

    const {latitude, longitude} = params
    const [storesToClosed, setStoresToClosed] = useState('')
    const [lengthStores, setLengthStores] = useState(0)

    useEffect(() => {
        getStoresToClosed({latitude, longitude, radio: 3})
        .then((response)=>{
            setStoresToClosed(response.data)
            setLengthStores(response.data.length)
        })
    }, [])
    

    console.log("TIENDAS CERCANAS USUARIO: ", storesToClosed)
    console.log("NUMERO DE TIENDAS DISPONIBLES", lengthStores)
       
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("ScreenDos")}
                style={styles.button}
            >
                <Image source={require('../images/image1.png')} style={styles.buttonImage} />
                <View style={styles.overlay}>
                    <Text style={styles.buttonTitle}>{lengthStores} Locales en tu zona</Text>
                    <Text style={[styles.buttonText, { color: 'white', borderColor: 'white' }]}>Explorar</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("ScreenTres")}
                style={styles.button}
            >
                <Image source={require('../images/image2.png')} style={styles.buttonImage} />
                <View style={styles.overlay}>
                    <Text style={styles.buttonTitle}>Búsqueda por prenda</Text>
                    <Text style={[styles.buttonText, { color: 'white', borderColor: 'white' }]}>Explorar</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        margin: 10,
        alignItems: 'center',
        position: 'relative',
    },
    buttonImage: {
        width: 300,
        height: 300,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: 'white', 
    },
});

export default ScreenUnoB;
