import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AddToCart from '../components/AddToCart';
import AddToFavourite from '../components/AddToFavourite';
import screenNames from '../../routes/screenNames';

const ProductScreen = props => {
  const {route} = props;
  const productData = route.params.data;
  return (
    <View>
      <View style={styles.productImgContainer}>
        <Image style={styles.productImg} source={productData.img} />
        <Text style={styles.productName}>{productData.name}</Text>
        <AddToCart productData={productData} />
        <AddToFavourite productData={productData} />
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(screenNames.cartscreen);
          }}>
          <Text style={styles.cartText}>Go to cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(screenNames.favouritescreen);
          }}>
          <Text style={styles.favText}>Go to favourite</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(screenNames.testScreen);
          }}>
          <Text style={{fontSize: 25, marginTop: 30}}>Got to test screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          props.navigation.navigate(screenNames.userScreen)
        }}>
          <Text>USERS API</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  productImgContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  productName: {
    fontSize: 20,
    marginTop: 15,
  },
  cartText: {
    fontSize: 20,
    backgroundColor: '#C2F3FF',
    marginTop: 30,
  },
  favText: {
    fontSize: 20,
    backgroundColor: '#C2F3FF',
    marginTop: 30,
  },
});
