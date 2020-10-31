import { Colors } from 'assets/styles/colors';
import { StyleProp } from 'react-native';
import styled from 'styled-components/native';

export const Container: StyleProp<any> = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white};
  height: 100%;
  width: 100%;
`;

export const TopContainer: StyleProp<any> = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BottomContainer: StyleProp<any> = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 80%;
  padding: 10px;
`;

export const SmallText: StyleProp<any> = styled.Text`
  font-size: 9px;
  padding: 15px;
  padding-bottom: 0px;
`;
