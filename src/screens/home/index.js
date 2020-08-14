import React, {Component} from 'react';
import {Container, Form, Categories, ContentCategory, Text} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {StatusBar} from 'react-native';

export default class Home extends Component {
  componentDidMount() {}
  render() {
    return (
      <Container>
        <StatusBar
          hidden={false}
          barStyle={'dark-content'}
          translucent
          backgroundColor="transparent"
        />
        <Form horizontal={true} showsHorizontalScrollIndicator={false}>
          <Categories>
            <ContentCategory>
              <Icon
                style={{alignSelf: 'center'}}
                size={22}
                color="#000"
                name="flask-outline"
              />
              <Text>Laboratórios</Text>
            </ContentCategory>
          </Categories>
          <Categories>
            <ContentCategory>
              <Icon
                style={{alignSelf: 'center'}}
                size={22}
                color="#000"
                name="cash-outline"
              />
              <Text>Banco</Text>
            </ContentCategory>
          </Categories>
          <Categories>
            <ContentCategory>
              <Icon
                style={{alignSelf: 'center'}}
                size={22}
                color="#000"
                name="briefcase-outline"
              />
              <Text>Trabalho</Text>
            </ContentCategory>
          </Categories>
          <Categories>
            <ContentCategory>
              <Icon
                style={{alignSelf: 'center'}}
                size={22}
                color="#000"
                name="bicycle-outline"
              />
              <Text>Lazer</Text>
            </ContentCategory>
          </Categories>
          <Categories>
            <ContentCategory>
              <Icon
                style={{alignSelf: 'center'}}
                size={22}
                color="#000"
                name="fitness-outline"
              />
              <Text>Saúde</Text>
            </ContentCategory>
          </Categories>
          <Categories>
            <ContentCategory>
              <Icon
                style={{alignSelf: 'center'}}
                size={22}
                color="#000"
                name="game-controller-outline"
              />
              <Text>Jogos</Text>
            </ContentCategory>
          </Categories>
        </Form>
        <Container />
      </Container>
    );
  }
}
