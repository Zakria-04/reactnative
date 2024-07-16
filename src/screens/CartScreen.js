import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import CartContext from '../../store/CartContext';
import ProductFooter from '../components/ProductFooter';
import {data} from '../res/data';

const CartScreen = () => {
  const {cart, setCart} = useContext(CartContext);
  console.log("cart ", cart);

  const filtT = () => {
    const x = cart.map(y => y.quantity);
    if (cart.map(quantity => quantity.quantity) <= 1) {
      console.log("must be filtered");
      let filterSmallerThanOne = cart.filter(filt => filt.quantity !== 1)
      console.log("filter the test",filterSmallerThanOne);
      setCart(filterSmallerThanOne)
    }
  };
  // console.log(cart);

  const addQ = id => {
    setCart(prevPrud =>
      prevPrud.map(item =>
        item.id === id ? {...item, quantity: item.quantity + 1} : item,
      ),
    );
  };
  const removeQ = id => {
    setCart(prevPrud =>
      prevPrud.map(item =>
        item.id === id ? {...item, quantity: item.quantity - 1} : item,
      ),
    );
    filtT();
  };

  const renderCart = ({item}) => {
    const {id} = item
    return (
      <View style={styles.itemContainer}>
        <Image source={item.img} />
        <Text style={styles.itemName}>{item.name}</Text>
        <TouchableOpacity
          onPress={() => {
            addQ(item.id);
          }}>
          <Text style={{fontSize: 25}}>add</Text>
        </TouchableOpacity>
        <Text>{item.quantity + ' qt'}</Text>
        <TouchableOpacity
          onPress={() => {
            removeQ(item.id);
          }}>
          <Text style={{fontSize: 25}}>remove</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={cart} renderItem={renderCart} />
      <ProductFooter />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  itemName: {
    fontSize: 20,
  },
});
