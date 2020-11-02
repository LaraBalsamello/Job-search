import { Colors } from 'assets/styles/colors';
import { Fonts } from 'assets/styles/font';
import { StatusBar, StyleProp } from 'react-native';
import styled from 'styled-components/native';

export const FlexContainer: StyleProp<any> = styled.View`
  shadow-color: black;
  shadow-opacity: 0.32;
  shadow-radius: 5.46px;
  elevation: 5;

  display: flex;
  flex-direction: row;
  color: ${Colors.word};
  background-color: ${Colors.silver};
  padding-bottom: 30px;
  border: 2px solid gainsboro;
  border-left-width: 0px;
  border-right-width: 0px;
  align-items: center;
  min-width: 100%;
  margin: auto;
  justify-content: center;
  position: relative;
`;

export const StatusBarOffset: StyleProp<any> = styled.View`
  min-height: ${StatusBar.currentHeight}px;
  background-color: ${Colors.white};
  display: flex;
`;

export const TextContainer: StyleProp<any> = styled.View`
  display: flex;
  margin-top: ${StatusBar.currentHeight}px;
  flex-direction: row;
`;

export const BoldTitleWhite: StyleProp<any> = styled.Text`
  display: flex;
  font-size: 24px;
  font-family: ${Fonts.title};
  color: ${Colors.white};
`;

export const styles: StyleProp<Object> = {
  width: 40,
  height: 40,
  left: 15,
  position: 'absolute',
};
