import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #6200ee;
  flex-direction: row;
  align-items: center;
`;

export const ContentLogo = styled.View`
  background: #6200ee;
  align-content: center;
  align-items: center;
  height: 30%;
  width: 100%;
`;

export const Image = styled.ImageBackground`
  padding: 0px;
  height: 80px;
  width: 130px;
`;

export const Text = styled.Text`
  margin-top: 19px;
  font-size: 20px;
  color: #fff ;
`;

export const ActivityIndicator = styled.ActivityIndicator`
  margin-top: 20px;
`;
