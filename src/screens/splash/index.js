import React, { useState, useEffect } from 'react';
import { Container, ContentLogo, Image, ActivityIndicator, Text } from './styles';
import Routes from '../../routes';
const splashscreen = require('../../assets/icon.png');
import { useAuth } from '../../context'

const splash = () => {

  const { timePassed, load } = useAuth();

  useEffect(() => {
    load()
  }, [])

  if (!timePassed) {
    return (
      <Container>
        <ContentLogo>
          <Image source={splashscreen} />
          <Text>Iniciando Aplicativo...</Text>
          <ActivityIndicator color="#fff" size="large" />
        </ContentLogo>
      </Container>
    );
  } else {
    return <Routes />
  }
}

export default splash;