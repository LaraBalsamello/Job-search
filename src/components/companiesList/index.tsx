import Company from 'components/company';
import { CompaniesListProps, CompanyType } from 'interfaces';
import React, { FC } from 'react';
import { ContainerScroll } from './styles';

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
