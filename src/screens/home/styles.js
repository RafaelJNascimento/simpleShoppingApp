import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Form = styled.ScrollView`
  max-height: 100px;
  width: 100%;
  background-color: #fff;
`;

export const FormList = styled.View`
  flex: 1;
  margin: 5px;
  padding-top: 15px;
  background-color: #fff;
`;

export const ItemList = styled.View`
  max-height: 170px;
  min-height: 170px;
  width: 100%;
  padding-top: 10px;
  margin-vertical: 8px;
  background-color: #eee;
  border-radius: 7px;
  align-items: center;
`;

export const ImageList = styled.Image`
  height: 130px;
  border-radius: 7px;
  width: 95%;
  margin-bottom: 3px;
`;

export const Categories = styled.TouchableOpacity`
  align-self: center;
  min-height: 80px;
  min-width: 80px;
  max-height: 80px;
  max-width: 80px;
  margin: 5px;
  border-radius: 50px;
  background: blue;
`;

export const ContentCategory = styled.View`
  border-radius: 50px;
  min-height: 70px;
  min-width: 70px;
  max-height: 70px;
  max-width: 70px;
  margin-top: 5px;
  padding-top: 15px;
  align-self: center;
  align-content: center;
  background: #eee;
`;

export const Text = styled.Text`
  font-size: 10px;
  align-self: center;
`;
