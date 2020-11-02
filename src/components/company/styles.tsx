import { Colors } from 'assets/styles/colors';
import { ImageStyle } from 'react-native';
import styled from 'styled-components/native';

export const CardContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: 0px 10px;
  elevation: 2;
  background-color: ${Colors.white};
  width: 80%;
  height: 48px;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const ContentContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  margin: 10px 0px;
`;

export const CompanyNameText = styled.TouchableOpacity`
  text-align: center;
  font-family: 'beba-neue';
  width: 60%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextBebaNeue = styled.Text`
  font-family: 'beba-neue';
  ${(props) => (props.customStyle ? props.customStyle : null)}
`;

export const Website = styled.Text`
  font-size: 10px;
  margin-right: 0;
  text-decoration: underline;
  color: ${Colors.silver};
`;

export const WebsiteContainer = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  height: 50px;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconsView = styled.View`
  background-color: ${Colors.blueMunsell};
  color: ${Colors.white};
  width: 50px;
  height: 48px;
  margin-right: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const imageStyles: ImageStyle = {
  width: 50,
  height: 48,
  resizeMode: 'contain',
  borderWidth: 1,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  backgroundColor: Colors.white,
  marginRight: '2%',
};
