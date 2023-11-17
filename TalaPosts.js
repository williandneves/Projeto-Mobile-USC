// TelaPosts.js
import React, { useState } from "react";
import { View, StyleSheet } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import CabecarioPosts from "../componentes/headerPosts";
import BotaoAddPosts from "../componentes/BotaoAddPosts";
import BarraDePesquisa from "../componentes/BarraDePesquisa";
import CaixaPost from "../componentes/CaixaPost"; // Importe o novo componente
import CaixaPost2 from "../componentes/CaixaPost"; // Importe o novo componente
import CaixaPost3 from "../componentes/CaixaPost"; // Importe o novo componente

function TelaPosts({ route }) {
  const navigation = useNavigation();

  function AddPost() {
    navigation.navigate('TelaAddPosts');
  }

  return (
    <View style={styles.container}>
      <CabecarioPosts />
      <BarraDePesquisa />
      <CaixaPost texto="Em um mundo cada vez mais digital, as criptomoedas estão se destacando como uma força transformadora no cenário financeiro global." />
      <CaixaPost2 texto="Programação é difícil demais! :O" />
      <CaixaPost3 texto="Se tornou aparentemente óbvio que nossa tecnologia excedeu nossa humanidade." />
      <BotaoAddPosts title='+' onPress={AddPost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TelaPosts;
