import { useNavigation } from '@react-navigation/native';
import { Colors } from 'assets/styles/colors';
import React, { FC } from 'react';
import { Image, Linking, Text, TouchableOpacity } from 'react-native';
import {
  CardContainer,
  CompanyNameText,
  ContentContainer,
  IconsView,
  imageStyles,
  Website,
  WebsiteContainer,
} from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { CompanyProps, CompanyType } from 'interfaces';

const Company: FC<CompanyProps> = ({ company, link = true }) => {
  const navigation = useNavigation();
  const handleNav = (company: CompanyType) => {
    navigation.navigate('Jobs', { company });
  };

  return (
    <ContentContainer>
      <TouchableOpacity onPress={() => handleNav(company)}>
        {company.logoUrl ? (
          <Image style={imageStyles} source={{ uri: company.logoUrl }}></Image>
        ) : (
          <IconsView>
            <MaterialIcons name="business" size={30} color={Colors.white} />
          </IconsView>
        )}
      </TouchableOpacity>
      <CardContainer>
        {link ? (
          <CompanyNameText onPress={() => handleNav(company)}>
            <Text>{company.name}</Text>
          </CompanyNameText>
        ) : (
          <CompanyNameText activeOpacity={1}>
            <Text>{company.name}</Text>
          </CompanyNameText>
        )}
        <WebsiteContainer onPress={() => Linking.openURL(company.websiteUrl)}>
          <Website>WebSite</Website>
        </WebsiteContainer>
      </CardContainer>
    </ContentContainer>
  );
};

export default Company;
