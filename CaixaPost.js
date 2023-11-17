import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CaixaPost = ({ texto }) => {
  return (
    <View style={styles.caixa}>
      <Text>{texto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  caixa: {
    backgroundColor: 'lightgray',
    padding: 20,
    margin: 10,
    marginTop: 30,
    borderRadius: 30,
    borderWidth: 10,
    borderColor: '#ddd',
  },
});

export default CaixaPost;
