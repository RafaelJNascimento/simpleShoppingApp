import 'react-native-gesture-handler';
import * as React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer, CommonActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
const icon = require('./assets/icon.png');
import Home from './screens/home/index';
import Cart from './screens/cart/index';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
//<Icon name="menu" style={{ color: '#000' }} />

const HomeStackScreen = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2a188e',
      },
      headerTintColor: '#fff',
    }}>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: (
          <>
            <Image style={{width: 30, height: 30}} source={icon} />{' '}
            <Text style={{fontSize: 15}}>Simple Shopping App</Text>
          </>
        ),
        headerLeft: () => (
          <TouchableOpacity
            style={{
              flex: 1,
              alignContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.openDrawer()}>
            <Icon
              style={{
                marginTop: 15,
                marginLeft: 10,
                width: 35,
                height: 30,
              }}
              size={30}
              color="#000"
              name="menu"
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{
              flex: 1,
              alignContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [{name: 'Home'}, {name: 'Cart'}],
                }),
              );
            }}>
            <Icon
              style={{
                marginTop: 15,
                marginRight: 8,
                width: 35,
                height: 30,
              }}
              size={30}
              color="#000"
              name="cart"
            />
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: '#2a188e',
      }}
    />
    <Stack.Screen name="Cart" component={Cart} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HomeScren" component={HomeStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
