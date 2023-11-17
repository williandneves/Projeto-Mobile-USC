import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

function Botao({onPress}){
    return(
        <Pressable
        style={styles.Button}
        onPress={onPress}
        >
            <Text>Postar</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    Button:{
        backgroundColor: '#d3d3d3', // Cor do botão Postar
        width: 300, //largura
        height: 35, //altura
        marginTop: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Botao;