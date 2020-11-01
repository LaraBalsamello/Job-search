import React, { FC } from 'react';
import Header from 'components/header/index';
import CompaniesList from 'components/companiesList';
import { BottomContainer, Container, SmallText, TopContainer } from './styles';
import { CenteredText } from 'assets/styles/main';
import { gql, useQuery } from '@apollo/client';

const COMPANIES_QUERY = gql`
  {
    companies {
      name
      logoUrl
      websiteUrl
    }
  }
`;

const MainScreen: FC = () => {
  const { data, loading } = useQuery(COMPANIES_QUERY);
  return !loading ? (
    <Container>
      <TopContainer>
        <Header title="Job search"></Header>
      </TopContainer>
      <BottomContainer>
        <CenteredText customStyles>Bienvenid@!</CenteredText>
        <CenteredText>
          Mirá las compañias con empleos disponibles:{' '}
        </CenteredText>
        <SmallText>
          *Presioná la compañia de tu interés para ver los empleos disponibles
        </SmallText>
        <CompaniesList companies={data && data.companies}></CompaniesList>
      </BottomContainer>
    </Container>
  ) : null;
};

export default MainScreen;
