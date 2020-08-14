import React, {Component} from 'react';
import {Container, ContentLogo, Image, ActivityIndicator, Text} from './styles';
import Routes from '../../routes';
const splashscreen = require('../../assets/icon.png');

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({timePassed: true});
    }, 2000);
  }

  render() {
    if (!this.state.timePassed) {
      return (
        <Container>
          <ContentLogo>
            <Image source={splashscreen} />
            <Text>Iniciando Aplicativo...</Text>
            <ActivityIndicator color="#2a188e" size="large" />
          </ContentLogo>
        </Container>
      );
    } else {
      return <Routes />;
    }
  }
}
