import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import screenNames from '../../routes/screenNames';

const Splash = props => {
  console.log('can go back? ', props.navigation.canGoBack());

  const navigateHome = () => {
    setTimeout(() => {
      props.navigation.replace(screenNames.homescreen);
    }, 2 * 1000);
  };

  useEffect(() => {
    navigateHome();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Loading</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
