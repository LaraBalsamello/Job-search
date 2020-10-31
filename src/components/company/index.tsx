import React, { FC } from 'react';
import { Text } from 'react-native';
import { CardContainer } from './styles';

interface CompanyProps {
  company: Company;
}

type Company = {
  name: string;
  slug: string;
};

const Company: FC<CompanyProps> = ({ company }) => (
  <CardContainer>
    <Text>{company}</Text>
  </CardContainer>
);

export default Company;
