import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #1c1e21;
`;

export const Form = styled.ScrollView`
  max-height: 90px;
  width: 100%;
  background-color: #1c1e21;
`;

export const FormList = styled.View`
  flex: 1;
  margin: 2px;
  padding-top: 2px;
  background-color: #1c1e21;
`;

export const ItemList = styled.View`
  padding: 2px;
  margin: 2px;
  height: 161px;
  width: 32.5%;
  background: #3700b3;
`;

export const FooterItemList = styled.View`
  padding: 0px;
  margin-left: 6px;
  height: 15px;
  background: #bb2020;
  width: 90%;
  border-radius: 5px;
`;

export const Card = styled.TouchableOpacity`
  flex: 3;
  background: #fff;
  border-radius: 5px;
  border-color: #eeee;
  flex-direction: column;
  border-width: 1px;
  padding-bottom: 3px;
  margin: 3% 3% 3% 3%;
`;

export const ImageList = styled.ImageBackground`
  resize-mode: contain;
  flex: 2;
  border-radius: 5px;
`;

export const ImgEstabelecimento = styled.Image`
  top: -4px;
  left: -4px;
  width: 64px;
  height: 64px;
  border-radius: 50px;
`;

export const Categories = styled.TouchableOpacity`
  align-self: center;
  min-height: 80px;
  min-width: 80px;
  max-height: 80px;
  max-width: 80px;
  margin: 5px;
  border-radius: 50px;
  background: #3700b3;
`;

export const ContentCategory = styled.View`
  border-radius: 50px;
  min-height: 70px;
  min-width: 70px;
  max-height: 70px;
  max-width: 70px;
  margin-top: 0px;
  padding-top: 15px;
  align-self: center;
  align-content: center;
  background: #bb2020;
`;

export const Text = styled.Text`
  font-size: 12px;
  color: #fff;
  align-self: center;
`;
