import React from "react";
import { StyleSheet, Text, Image, View} from 'react-native'

function Cabecario(){
    return(
        <View style={styles.cabcario}>
            <Text style={styles.nome}>JUVENTUDE</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    cabecario:{
        flexDirection: 'row',
        height: 200,
        backgroundColor:'#FFFFFF',
        width: 390,
        alignItems: 'center',
        padding: 30,
        borderRadius: 20
    },
    nome:{
        fontSize: 67,
        marginTop: 90,
        alignItems: 'center',
        fontFamily: 'Futura'
    },
    logo:{
        marginTop: 10
    }
})
export default Cabecario;