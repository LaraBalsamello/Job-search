import Company from 'components/company';
import React, { FC } from 'react';
import { View } from 'react-native';

type CompanyType = {
  name: string;
  slug: string;
};

interface CompaniesListProps {
  companies?: Array<CompanyType>;
}

const CompaniesList: FC<CompaniesListProps> = ({ companies }) => (
  <View>
    {companies &&
      companies.map((company) => <Company company={company}></Company>)}
  </View>
);

export default CompaniesList;
