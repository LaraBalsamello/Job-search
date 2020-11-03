import { Colors } from 'assets/styles/colors';
import styled from 'styled-components/native';

export const SuitCase = styled.View`
  display: flex;
  position: relative;
`;

export const Line = styled.View`
  border: 0px solid ${Colors.white};
  border-bottom-width: 4px;
  position: absolute;
  top: 10px;
  height: 10px;
  width: 100px;
  z-index: 1;
`;

export const SuitCaseInside = styled.View`
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  width: 100px;
  height: 70px;
  border-radius: 10px;
  background-color: ${Colors.blackCoral}
  border: 4px solid ${Colors.white};
  position: relative;
`;

export const LoadingContainer = styled.View`
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.customStylesForContainer
      ? props.customStylesForContainer
      : `background-color: ${Colors.blackCoral}; height: 100%;`}
`;

export const DotsTextContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const Ptext = styled.Text`
  font-size: 22px;
  color: ${Colors.white};
  position: relative;
  font-family: 'beba-neue';
  margin-top: 3px;
`;
