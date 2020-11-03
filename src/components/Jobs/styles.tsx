import { Colors } from 'assets/styles/colors';
import styled from 'styled-components/native';

export const Card = styled.View`
  background-color: ${Colors.white};
  elevation: 5;
  min-height: 100px;
  width: 98%;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;
  ${(props) => (props.customStyle ? `${props.customStyle}` : null)}
`;

export const IconFavorite = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 5px;
  padding-top: 5px;
`;

export const SuccessText = styled.Text`
  color: ${Colors.success};
  position: absolute;
  right: 0;
  bottom: 5px;
`;

export const TopContainerJob = styled.View`
  margin-bottom: 5px;
  padding-bottom: 5px;
  border: 2px solid gainsboro;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const FlexContainerBottom = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const CommitmentText = styled.Text`
  margin-top: 10px;
  font-size: 12px;
  font-weight: bold;
  color: ${Colors.blueMunsell};
`;

export const imageStyles = 'max-width: 70%; font-size: 18px;';
