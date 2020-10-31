import React, { FC } from 'react';
import { Text, View } from 'react-native';

interface CompanyProps {
  company: Company;
}

type Company = {
  name: string;
  slug: string;
};

const Company: FC<CompanyProps> = ({ company }) => (
  <View>
    <Text>{company}</Text>
  </View>
);

export default Company;
