import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ProductFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, color: '#fff'}}>price: </Text>
      <TouchableOpacity>
        <Text style={{fontSize: 20, color: '#fff'}}>Buy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductFooter;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    marginTop: 150,
    height: 50,
  },
});
