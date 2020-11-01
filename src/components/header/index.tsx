import React, { FC } from 'react';
import {
  BoldTitleWhite,
  FlexContainer,
  StatusBarOffset,
  TextContainer,
} from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';

interface HeaderProps {
  title: string;
  iconName?: string;
}

const Header: FC<HeaderProps> = ({ title = '', iconName }) => {
  const navigation = useNavigation();

  return (
    <View>
      <StatusBarOffset />
      <FlexContainer>
        {iconName && (
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              left: 15,
              position: 'absolute',
            }}
          >
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
