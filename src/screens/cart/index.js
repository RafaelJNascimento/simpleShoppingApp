import React, {Component} from 'react';
import {Container, Text} from './styles';
import {StatusBar} from 'react-native';

export default class Cart extends Component {
  componentDidMount() {}

  render() {
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
}
