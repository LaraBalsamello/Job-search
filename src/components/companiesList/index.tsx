import Company from 'components/company';
import React, { FC } from 'react';
import { Container } from './styles';

type CompanyType = {
  name: string;
  logoUrl: string;
  websiteUrl: string;
};

interface CompaniesListProps {
  companies?: Array<CompanyType>;
}

const CompaniesList: FC<CompaniesListProps> = ({ companies }) => {
  return (
    <Container>
      {companies &&
        companies.map((company: CompanyType, index: number) => (
          <Company key={index} company={company}></Company>
        ))}
    </Container>
  );
};
export default CompaniesList;
