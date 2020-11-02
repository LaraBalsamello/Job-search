import React, { FC } from 'react';
import {
  BoldTitleWhite,
  FlexContainer,
  StatusBarOffset,
  styles,
  TextContainer,
} from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { HeaderProps } from 'interfaces';

const Header: FC<HeaderProps> = ({ title = '', iconName }) => {
  const navigation = useNavigation();

  return (
    <View>
      <StatusBarOffset />
      <FlexContainer>
        {iconName && (
          <TouchableOpacity style={styles}>
            <Ionicons
              onPress={() => navigation.goBack()}
              name={iconName}
              size={34}
              color="white"
            />
          </TouchableOpacity>
        )}
        <TextContainer>
          <BoldTitleWhite>{title}</BoldTitleWhite>
        </TextContainer>
      </FlexContainer>
    </View>
  );
};

export default Header;
