import React from "react";
import { StyleSheet, Pressable, Button, Text} from 'react-native'
import { useNavigation } from "@react-navigation/native";

function BotaoAddPosts({title, onPress}){

    const navigation = useNavigation()

    return(
        <Pressable
        style={styles.Button}
        onPress={onPress}
        >
            <Text style={styles.add}>{title}</Text>
        </Pressable>
    )
} const styles = StyleSheet.create({
    Button:{
        backgroundColor: '#78866b',
        height: 60, //altura
        width: 60, //largura
        marginLeft: '5%',
        marginTop: 170, //altura do icone +
        borderRadius: 50,
    },
    add:{
        fontSize: 50,
        textAlign: 'center',
        marginTop: -3
    }
})
export default BotaoAddPosts;