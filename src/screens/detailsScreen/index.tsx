import React, { FC } from 'react';
import Header from 'components/header/index';
import { BottomContainer, Container, TopContainer } from '../mainScreen/styles';
import { CenteredText } from 'assets/styles/main';
import Company from 'components/company';
import { ContainerScroll } from 'components/companiesList/styles';
import JobComponent from 'components/Jobs';
import { CompanyType, Job } from 'interfaces';
import { customJobStyle, customStyles } from './styles';

const DetailsScreen: FC<any> = ({ route }) => {
  const { company } = route.params;

  const comp: CompanyType = {
    name: company.name,
    websiteUrl: company.websiteUrl,
    logoUrl: company.logoUrl,
  };

  let jobs: Array<Job>;

  if (company) {
    jobs = company.jobs;
  }

  return (
    <Container>
      <TopContainer>
        <Header iconName="md-arrow-back" title="Job search"></Header>
      </TopContainer>
      <BottomContainer>
        <CenteredText customStyles={customStyles}>
          {jobs && jobs.length > 0
            ? 'Empleos disponibles en:'
            : 'No se encontraron empleos disponibles en:'}
        </CenteredText>
        <Company company={comp}></Company>
        <ContainerScroll>
          {jobs.map((job: any, i: number) => (
            <JobComponent
              key={`${i}job_`}
              customStyle={jobs.length - 1 === i ? customJobStyle : ''}
              job={job}
            ></JobComponent>
          ))}
        </ContainerScroll>
      </BottomContainer>
    </Container>
  );
};

export default DetailsScreen;
