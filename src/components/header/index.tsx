import React, { FC } from 'react';
import {
  BoldTitleWhite,
  FlexContainer,
  StatusBarOffset,
  styles,
  stylesRight,
  TextContainer,
} from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { HeaderProps } from 'interfaces';
import { MaterialIcons } from '@expo/vector-icons';

const Header: FC<HeaderProps> = ({
  title = '',
  iconName,
  showFavorites = false,
}) => {
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
        {showFavorites && (
          <TouchableOpacity style={stylesRight}>
            <MaterialIcons
              onPress={() => navigation.navigate('favorites')}
              name={showFavorites}
              size={34}
              color="white"
            />
          </TouchableOpacity>
        )}
      </FlexContainer>
    </View>
  );
};

export default Header;
