import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStackScreen from './HomeStackScreen'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="HomeScren" component={HomeStackScreen} />
      </Drawer.Navigator>
  );
}