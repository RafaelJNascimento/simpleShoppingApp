import React from 'react';
import {
  Container,
  ImgEstabelecimento,
  Form,
  Categories,
  ContentCategory,
  FormList,
  ItemList,
  ImageList,
  Card,
  FooterItemList,
  Text,
} from './styles';
import { StatusBar, FlatList } from 'react-native';
import { useAuth } from '../../context'

const Item = ({ item }) => (
  <ItemList>
    <FooterItemList>
      <Text style={{ fontWeight: "bold", fontFamily: "Cochin" }}>{item.name}</Text>
    </FooterItemList>
    <Card
      style={{ opacity: 1 }}
      onPress={() => console.log(item)}
    ><ImageList
      source={{ uri: item.img }}
      resizeMode="cover"
    ></ImageList>
    </Card>
  </ItemList>
);

const home = () => {
  const { estabelecimentos } = useAuth();
  return (
    <Container>
      <StatusBar
        hidden={false}
        barStyle={'light-content'}
        translucent
        backgroundColor="#3700b3"
      />
      <Form horizontal={true} showsHorizontalScrollIndicator={false}>
        {estabelecimentos.map((item, index) => (
          <Categories key={index}>
            <ContentCategory>
              <ImgEstabelecimento
                style={{ alignSelf: 'center' }}
                source={{ uri: item.img }}
                resizeMode="cover"
              />
            </ContentCategory>
          </Categories>
        ))}
      </Form>
      <FormList>
        <FlatList
          data={estabelecimentos}
          numColumns={3}
          renderItem={Item}
          keyExtractor={(item, index) => String(index)}
        />
      </FormList>
    </Container>
  );
}

export default home;
