import React, {Component} from 'react';
import {Container, Text} from './styles';
import {StatusBar} from 'react-native';
import { useAuth } from '../../context'

const cart = () => {
  const { timePassed, load } = useAuth();
  return (
    <Container>
      <StatusBar
        hidden={false}
        barStyle={'light-content'}
        translucent
        backgroundColor="transparent"
      />
      <Text>Cart</Text>
    </Container>
  );
}

export default cart;
