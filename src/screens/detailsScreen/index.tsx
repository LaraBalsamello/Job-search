import React, { FC } from 'react';
import Header from 'components/header/index';
import { BottomContainer, Container, TopContainer } from '../mainScreen/styles';
import { CenteredText } from 'assets/styles/main';
import { gql, useQuery } from '@apollo/client';
import Company from 'components/company';
import { Text } from 'react-native';
import { ContainerScroll } from 'components/companiesList/styles';
import JobComponent from 'components/Jobs';

const DetailsScreen: FC<any> = ({ route }) => {
  const { company } = route.params;

  const queryJobs: Company = {
    name: company.name,
    websiteUrl: company.websiteUrl,
    logoUrl: company.logoUrl,
  };

  const JOBS_QUERY = gql`
    query getCompaniesByName($name: String!) {
      companies {
        jobs(where: { company: { name: $name } }) {
          title
          commitment {
            title
          }
          locationNames
          cities {
            name
            country {
              name
            }
          }
          remotes {
            name
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(JOBS_QUERY, {
    variables: { name: queryJobs.name },
  });
  let jobs;
  if (data) {
    jobs = data.companies[0].jobs;
    for (let i = 0; i < jobs.length; i++) {
      const job = jobs[i];
    }
  }
  return !loading ? (
    <Container>
      <TopContainer>
        <Header iconName="md-arrow-back" title="Job search"></Header>
      </TopContainer>
      <BottomContainer>
        <CenteredText customStyles>Trabajos disponibles en</CenteredText>
        <Company company={queryJobs}></Company>
        <ContainerScroll>
          {jobs.map((job: any, i: number) => (
            <JobComponent
              customStyle={
                jobs.length - 1 === i ? 'margin-bottom: 30px;' : null
              }
              job={job}
            ></JobComponent>
          ))}
        </ContainerScroll>
      </BottomContainer>
    </Container>
  ) : (
    <Text>Cargando</Text>
  );
};

export default DetailsScreen;
