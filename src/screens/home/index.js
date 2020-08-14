import React, {Component} from 'react';
import {
  Container,
  Form,
  Categories,
  ContentCategory,
  FormList,
  ItemList,
  ImageList,
  Text,
} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {StatusBar, FlatList} from 'react-native';
import {items} from '../../const';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Comprem os melhores Cavalos',
    path: require('../../assets/img/cavalo.jpg'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Comprem as melhores Vacas',
    path: require('../../assets/img/vaca.jpg'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
    title: 'Visite templos budistas',
    path: require('../../assets/img/budismo.jpg'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
    title: 'Comprem os melhores Caprinos',
    path: require('../../assets/img/caprino.jpg'),
  },
];

export default class Home extends Component {
  componentDidMount() {}
  render() {
    const Item = ({item}) => (
      <ItemList>
        <ImageList source={item.path} />
        <Text style={{fontSize: 15}}>{item.title}</Text>
      </ItemList>
    );

    return (
      <Container>
        <StatusBar
          hidden={false}
          barStyle={'dark-content'}
          translucent
          backgroundColor="transparent"
        />
        <Form horizontal={true} showsHorizontalScrollIndicator={false}>
          {items.map((item, index) => (
            <Categories key={index}>
              <ContentCategory>
                <Icon
                  style={{alignSelf: 'center'}}
                  size={22}
                  color="#000"
                  name={item.icon}
                />
                <Text>{item.name}</Text>
              </ContentCategory>
            </Categories>
          ))}
        </Form>
        <FormList>
          <FlatList
            data={DATA}
            renderItem={Item}
            keyExtractor={(item, index) => String(index)}
          />
        </FormList>
      </Container>
    );
  }
}
