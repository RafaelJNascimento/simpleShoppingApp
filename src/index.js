import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './screens/splash';
import { StatusBar } from 'react-native';
import { Context } from './context'

const App = () => {
  return (
    <NavigationContainer>
      <Context>
        <StatusBar hidden={true} translucent backgroundColor="transparent" />
        <Splash />
      </Context>
    </NavigationContainer>
  );
};

export default App;
