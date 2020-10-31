import { useNavigation } from '@react-navigation/native';
import { Colors } from 'assets/styles/colors';
import React, { FC } from 'react';
import { Image, Linking, Text, TouchableOpacity } from 'react-native';
import {
  CardContainer,
  CompanyNameText,
  ContentContainer,
  Website,
} from './styles';

interface CompanyProps {
  company: Company;
}

type Company = {
  name: string;
  logoUrl: string;
  websiteUrl: string;
};

const Company: FC<CompanyProps> = ({ company }) => {
  const navigation = useNavigation();
  const handleNav = (companyName: string) => {
    navigation.navigate('Jobs');
  };
  return (
    <ContentContainer>
      <TouchableOpacity onPress={() => handleNav(company.name)}>
        <Image
          style={{
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
          }}
          source={
            !company.logoUrl
              ? require('assets/snack-icon.png')
              : { uri: company.logoUrl }
          }
        ></Image>
      </TouchableOpacity>
      <CardContainer>
        <CompanyNameText onPress={() => handleNav(company.name)}>
          <Text>{company.name}</Text>
        </CompanyNameText>
        <Website onPress={() => Linking.openURL(company.websiteUrl)}>
          WebSite
        </Website>
      </CardContainer>
    </ContentContainer>
  );
};

export default Company;
