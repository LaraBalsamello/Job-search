import React, { FC } from 'react';
import Header from 'components/header/index';
import {
  BottomContainer,
  Container,
  SmallText,
  TopContainer,
} from '../mainScreen/styles';
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

const DetailsScreen: FC = () => {
  const { data, loading } = useQuery(COMPANIES_QUERY);
  return !loading ? (
    <Container>
      <TopContainer>
        <Header img="" title="Job search"></Header>
      </TopContainer>
      <BottomContainer>
        <CenteredText customStyles>Trabajos disponibles en</CenteredText>
        <CenteredText>
          Mirá las compañias con empleos disponibles:{' '}
        </CenteredText>
        <SmallText>
          *Presioná la compañia de tu interés para ver los empleos disponibles
        </SmallText>
      </BottomContainer>
    </Container>
  ) : null;
};

export default DetailsScreen;
