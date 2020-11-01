import { useNavigation } from '@react-navigation/native';
import { Colors } from 'assets/styles/colors';
import React, { FC } from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import {
  CardContainer,
  CompanyNameText,
  ContentContainer,
  IconsView,
  Website,
} from './styles';
import { MaterialIcons } from '@expo/vector-icons';

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
  const handleNav = (company: Company) => {
    navigation.navigate('Jobs', { company });
  };
  return (
    <ContentContainer>
      <TouchableOpacity onPress={() => handleNav(company)}>
        {company.logoUrl ? (
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
            source={{ uri: company.logoUrl }}
          ></Image>
        ) : (
          <IconsView>
            <MaterialIcons name="business" size={30} color={Colors.white} />
          </IconsView>
        )}
      </TouchableOpacity>
      <CardContainer>
        <CompanyNameText onPress={() => handleNav(company)}>
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
