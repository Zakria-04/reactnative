import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import CartContext from '../../store/CartContext';

const AddToCart = ({productData}) => {
  const {cart, setCart} = useContext(CartContext);

  const checkIfItemInCart = () => {
    const itemObj = cart.find(val => val.id == productData.id);

    return !!itemObj;
  };

  const addToCart = () => {
    if (checkIfItemInCart()) {
      Alert.alert('Product in cart');
      return;
    }

    const cartList = cart;
    cartList.push(productData);
    setCart(cartList);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          addToCart();
        }}>
        <Text style={styles.cartText}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  cartText: {
    fontSize: 20,
    backgroundColor: 'gray',
    marginTop: 20,
  },
});
