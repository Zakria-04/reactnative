import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screenNames from './screenNames';
import Splash from '../src/screens/Splash';
import HomeScreen from '../src/screens/HomeScreen';
import ProductScreen from '../src/screens/ProductScreen';
import CartScreen from '../src/screens/CartScreen';
import FavouriteScreen from '../src/screens/FavouriteScreen';
import TestScreen from '../src/screens/TestScreen';
import UserItem from '../src/components/UserItem';
import UserScreen from '../src/screens/UserScreen';

const MainNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={screenNames.splash} component={Splash} />
        <Stack.Screen name={screenNames.homescreen} component={HomeScreen} />
        <Stack.Screen
          name={screenNames.productscreen}
          component={ProductScreen}
        />
        <Stack.Screen name={screenNames.cartscreen} component={CartScreen} />
        <Stack.Screen
          name={screenNames.favouritescreen}
          component={FavouriteScreen}
        />
        <Stack.Screen name={screenNames.testScreen} component={TestScreen} />
        <Stack.Screen name={screenNames.getApi} component={UserItem} />
        <Stack.Screen name={screenNames.userScreen} component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNav;
