import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {data} from '../res/data';
import CategoryItem from '../components/CategoryItem';
import CoffeeItem from '../components/CoffeeItem';

const HomeScreen = () => {
  const [item, setItem] = useState(data);
  const MenuItem = [...new Set(data.map(val => val.category))];

  const filterItems = cat => {
    const newItems = data.filter(newVal => newVal.category == cat);
    setItem(newItems);
  };

  return (
    <View style={styles.container}>
      {/* Category */}
      <CategoryItem
        MenuItem={MenuItem}
        filterItems={filterItems}
        setItem={setItem}
      />
      {/* Coffee render */}
      <CoffeeItem item={item} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
