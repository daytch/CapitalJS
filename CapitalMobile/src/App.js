import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import store from './redux/store';
import Icon from './components/Icon';
import {Home, Product, ProductDetail} from './screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ProductNavigator = (props) => {
  return(
    <Stack.Navigator initialRouteName="Product">
      <Stack.Screen name="Product" component={Product} options={{headerShown: false}} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  )
}

const RootNavigator = () => {
  const productNavOptions = ({route, navigation}) => {
    let index = route.state?.index || 0
    return {
      tabBarVisible: index <= 0
    }
  }
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } else if (route.name === 'ProductNav') {
            iconName = focused ? 'cart' : 'cart-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ProductNav" component={ProductNavigator} options={productNavOptions} />
    </Tab.Navigator>
  )
}

const App = (props) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
