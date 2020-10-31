import Company from 'components/company';
import React, { FC } from 'react';
import { Container } from './styles';

type CompanyType = {
  name: string;
  slug: string;
};

interface CompaniesListProps {
  companies?: Array<CompanyType>;
}

const CompaniesList: FC<CompaniesListProps> = ({ companies }) => (
  <Container>
    {companies &&
      companies.map((company, index) => (
        <Company key={index} company={company}></Company>
      ))}
  </Container>
);

export default CompaniesList;
