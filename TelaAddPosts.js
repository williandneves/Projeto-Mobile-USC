import React from "react";
import { View, Text, Image, StyleSheet, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";
import EntradaPosts from "../componentes/EntradaPost";
import BotaoPostar from "../componentes/BotaoPostar";

function TelaAddPosts({onPress}){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <Pressable
            onPress={()=>{navigation.goBack()}}
            >
                <Image source={require('../assets/flecha.png')}/>
            </Pressable>
            <View style={styles.main}>
                <EntradaPosts/>
                <BotaoPostar/>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#78866b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    main:{
        height: 670,
        width: 330,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 30,
        alignItems: 'center'
    }
})
export default TelaAddPosts;