import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function EntradaPosts({setInputText, inputText}){
    return(
        <View style={styles.container}>
            <TextInput style={styles.dados}
            placeholder="    Adicione um post aqui..."
            multiline={true}
            onChangeText={setInputText}
            value={inputText}>
            </TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        width: '90%',
        marginTop: 300,
        height: 300,
        borderRadius: 5,
    },
    dados:{
        width: '90%',
        height: 250,
    }
})
export default EntradaPosts;