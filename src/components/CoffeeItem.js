import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import screenNames from '../../routes/screenNames';

const CoffeeItem = ({item}) => {
  const Navigation = useNavigation();
  const renderCoffee = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => {
            Navigation.navigate(screenNames.productscreen, {data: item})
        }}>
          <Image style={styles.itemImg} source={item.img} />
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={item} renderItem={renderCoffee} numColumns={2} />
    </View>
  );
};

export default CoffeeItem;

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
  },
  itemImg: {
    width: 150,
    height: 150,
  },
});
