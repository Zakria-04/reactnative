import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {data} from '../res/data';
import CartContext from '../../store/CartContext';

const TestScreen = () => {
  const initialProducts = [
    {id: '1', name: 'Product 1', quantity: 1},
    {id: '2', name: 'Product 2', quantity: 1},
    // Add more products as needed
  ];

  //   const [products, setProducts] = useState(data);
  const {cart, setCart} = useContext(CartContext);
  //   console.log(products);

  const increaseQuantity = id => {
    setCart(prevProducts =>
      prevProducts.map(product =>
        product.id === id
          ? {...product, quantity: (product.quantity += 1)}
          : product,
      ),
    );
  };

  const decreaseQuantity = id => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id && product.quantity > 0
          ? {...product, quantity: product.quantity - 1}
          : console.log("remove"),
      ),
    );
  };

  const tAr = [
    {number: 1},
    {number: 2},
    {number: 0},
    {number: 3},
  ]
  const filterT = tAr.filter(it => it.number !== 0)
  console.log(filterT);

  const renderItem = ({item}) => {
    return (
      <View style={styles.productContainer}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>Quantity: {item.quantity}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Increase"
            onPress={() => {
              increaseQuantity(item.id);
              console.log(item);
            }}
          />
          <Button
            title="Decrease"
            onPress={() => {
              decreaseQuantity(item.id);
              console.log(item);
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={cart}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
  },
});
