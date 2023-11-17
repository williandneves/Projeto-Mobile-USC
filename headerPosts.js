import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import { useNavigation } from "@react-navigation/native";

function CabecarioPosts({onPress, title}){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <Pressable 
            style={styles.Button}
            onPress={()=>{navigation.goBack()}}
            >
                <Image source={require('../assets/flecha.png')}/>
            </Pressable>
            <View style={styles.nome}>
                <Text style={styles.texto}>POSTS</Text>
            </View>
            <View style={styles.perfil}>
                <Image source={require('../assets/perfil2.png')}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#78866b',
        height: 120,
        width: 390,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    Button:{
        width: 58,
        height: 60,
        backgroundColor: '#78866b',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: 50,
        borderRadius: 30
    },
    nome:{
        marginLeft: '12%',
        textAlign: 'center',
        marginTop: 50
        
    },
    texto:{
        fontSize: 50,
        fontFamily: 'Futura' //Fonte de 'POSTS'
    },
    perfil:{
        marginTop: 50,
        marginLeft: 40
    }

})
export default CabecarioPosts;