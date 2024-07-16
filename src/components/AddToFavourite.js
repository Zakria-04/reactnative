import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import FavouriteContext from '../../store/FavouriteContext';

const AddToFavourite = ({productData}) => {
  const {favourite, setFavourite} = useContext(FavouriteContext);

  const addToFavourite = () => {
    const FavList = favourite;
    FavList.push(productData);
    console.log(FavList);
    const getBooleanT = favourite.map(x => x.favourite = true);
    console.log('x', getBooleanT);
    console.log(favourite);
    // const FavList = favourite;
    // FavList.push(productData);
    // console.log(FavList);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          addToFavourite();
        }}>
        <Text style={styles.favText}>Add To Favourite</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddToFavourite;

const styles = StyleSheet.create({
  favText: {
    fontSize: 20,
    backgroundColor: 'gray',
    marginTop: 20,
  },
});
