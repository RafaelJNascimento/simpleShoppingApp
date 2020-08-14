import React from 'react';
import Splash from './screens/splash';
import {StatusBar} from 'react-native';

const App = (props) => {
  return (
    <>
      <StatusBar hidden={true} translucent backgroundColor="transparent" />
      <Splash />
    </>
  );
};

export default App;
