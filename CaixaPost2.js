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
    backgroundColor: 'white',
    padding: 50,
    margin: 20,
    marginTop: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default CaixaPost;
