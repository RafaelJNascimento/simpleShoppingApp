import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Form = styled.ScrollView`
  max-height: 100px;
  width: 100%;
  background-color: #fff;
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
