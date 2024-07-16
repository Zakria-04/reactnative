import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import AddToFavourite from '../components/AddToFavourite';
import FavouriteContext from '../../store/FavouriteContext';

const FavouriteScreen = () => {
  const {favourite, setFavourite} = useContext(FavouriteContext);
  console.log(favourite);

  const filterF = () => {
    // const checkF = favourite.map(F => F.favourite == false);
    if (favourite.map(F => F.favourite == false)) {
      console.log('Hello');
      console.log('must be removed');
      const filter = favourite.filter(f => f.favourite == true);
      console.log('the f', filter);
      setFavourite(filter);
    } else {
      console.log('do not remove');
    }
  };

  const renderFavourite = ({item}) => {
    return (
      <View>
        <Image source={item.img} />
        <Text>{item.name}</Text>
        <TouchableOpacity
          onPress={() => {
            // console.log(item);
            // const getBooleanF = favourite.map(x => x.favourite = false)
            // console.log("y", getBooleanF);
            // console.log(favourite);
            // filterF()

            const getBooleanF = (item.favourite = false);
            console.log('y', getBooleanF);
            console.log(favourite);
            filterF();
          }}>
          <Text>remove</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={favourite} renderItem={renderFavourite} />
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  
});
