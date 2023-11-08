import { Text, TouchableOpacity, StyleSheet } from "react-native"
import ScreenUno from "../screens/ScreenUno"
import Btn from "../screens/Btn"


function ComponenteUno({ navigation }) {
    return (
        <>
            <Text>
                Este es el primer componente
            </Text>
            <Btn presionado={() => navigation.navigate("ScreenDos")}></Btn>
        </>
    )
}

export default ComponenteUno;