import Company from 'components/company';
import React, { FC } from 'react';
import { ContainerScroll } from './styles';

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
    <ContainerScroll>
      {companies &&
        companies.map((company: CompanyType, index: number) => (
          <Company key={index} company={company}></Company>
        ))}
    </ContainerScroll>
  );
};
export default CompaniesList;
