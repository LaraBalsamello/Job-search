import { Colors } from 'assets/styles/colors';
import { Fonts } from 'assets/styles/font';
import { StatusBar, StyleProp } from 'react-native';
import styled from 'styled-components/native';

export const FlexContainer: StyleProp<any> = styled.View`
  display: flex;
  flex-direction: column;
  color: ${Colors.word};
  background-color: ${Colors.silver};
  padding-bottom: 30px;
  justify-content: center;
  border: 2px solid gainsboro;
  border-left-width: 0px;
  border-right-width: 0px;
  align-items: center;
  shadow-color: black;
  shadow-offset: {
    width: 0;
    height: 4;
  }
  shadow-opacity: 0.32;
  shadow-radius: 5.46;
  elevation: 5;
`;

export const StatusBarOffset: StyleProp<any> = styled.View`
  min-height: ${StatusBar.currentHeight}px;
  background-color: ${Colors.white};
  display: flex;
`;

export const TextContainer: StyleProp<any> = styled.View`
  display: flex;
  margin-top: ${StatusBar.currentHeight}px;
`;

export const BoldTitleWhite: StyleProp<any> = styled.Text`
  display: flex;
  font-size: 24px;
  font-family: ${Fonts.title};
  color: ${Colors.white};
`;
