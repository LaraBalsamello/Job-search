import { StyleProp } from 'react-native';
import styled from 'styled-components/native';

export const CenteredText: StyleProp<any> = styled.Text`
  text-align: center;
  font-family: 'asap';
  ${(props) => props.customStyles && `margin: 30px`};
`;
