import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainNav from './routes/nav';
import CartProvider from './store/CartProvider';
import FavouriteProvider from './store/FavouriteProvider';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <CartProvider>
        <FavouriteProvider>
          <MainNav />
        </FavouriteProvider>
      </CartProvider>
    </View>
  );
};

export default App;
