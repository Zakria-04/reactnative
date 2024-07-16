import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {data} from '../res/data';

const CategoryItem = props => {
  const {MenuItem, filterItems, setItem} = props;
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => {
            setItem(data);
          }}>
          <Text style={styles.categoryText}>All</Text>
        </TouchableOpacity>

        {MenuItem.map((category, index) => {
          return (
            <View key={index.toString()}>
              <TouchableOpacity onPress={() => filterItems(category)}>
                <Text style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 20,
    padding: 10,
  },
});
