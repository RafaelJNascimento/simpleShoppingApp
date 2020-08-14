import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  flex-direction: row;
  align-items: center;
`;

export const ContentLogo = styled.View`
  background: #fff;
  align-content: center;
  align-items: center;
  height: 30%;
  width: 100%;
`;

export const Image = styled.ImageBackground`
  padding: 0px;
  height: 80px;
  width: 100px;
`;

export const Text = styled.Text`
  margin-top: 20px;
  font-size: 20px;
  color: #2a188e;
`;

export const ActivityIndicator = styled.ActivityIndicator`
  margin-top: 60px;
`;
