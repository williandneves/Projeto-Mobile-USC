import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import EntradaDeDados from '../componentes/EntradaDeDados';
import BotaoPersonalizado from "../componentes/BotaoPersonalizado";
import Facebook from "../componentes/facebook";
import Google from "../componentes/google";
import Cabecario from "../componentes/header";
import { useNavigation} from '@react-navigation/native' 

 function TelaLogin(){
        const navigation = useNavigation()
        const [nome, setNome] = useState ('')
        const [senha, setSenha] = useState ('')
        const [sucesso, setSucesso]  = useState(false)

        function ValidaLogin(){
            if(nome=='Fulano' && senha=='123'){
                setSucesso(true)
                navigation.navigate('TelaPosts')
            } 
            else{
                setSucesso(false)
                console.log('Dados incorretos!')
                      
            }  
        }

    return(
        <View>
            <Cabecario/>
        <View style={styles.main}>
            <View style={styles.espacos}>
                <Image source={require('../assets/perfil.png')}/>
                <EntradaDeDados label='Nome' setFunction={(text)=>(setNome(text))}/>
                <EntradaDeDados label='Senha' setFunction={(text)=>(setSenha(text))}/>
                <Text>Esqueci minha senha</Text>
                <BotaoPersonalizado title='Acessar' onPress={ValidaLogin}/>
            </View>
            <View style={styles.iconsContainer}>
          <View style={styles.icon}>
            <Facebook />
          </View>
          <View style={styles.icon}>
            <Google />
          </View>
        </View>
      </View>
    </View>
    )
}
const styles = StyleSheet.create({
    main:{
        backgroundColor:'#78866b',
        height: '70%',
        width: 390,
        borderRadius: 5,
        marginTop: 76
    },
    espacos:{
        alignItems:'center',
        marginTop: 20,
    },
    iconsContainer: {
        flexDirection: 'row', // Alinha os ícones na horizontal
        justifyContent: 'center', // Distribui os ícones uniformemente ao longo do eixo principal (horizontal)
        alignItems:'center',
        marginTop: 50,
    },
    marginHorizontal: 100,
    },
)
export default TelaLogin;