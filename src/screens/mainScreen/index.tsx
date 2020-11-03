import React, { FC } from 'react';
import Header from 'components/header/index';
import CompaniesList from 'components/companiesList';
import {
  BottomContainer,
  Container,
  customStyles,
  SmallText,
  TopContainer,
} from './styles';
import { CenteredText } from 'assets/styles/main';
import { useQuery } from '@apollo/client';
import { COMPANIES_QUERY } from './queries';
import Loader from 'components/Loader';

const MainScreen: FC = () => {
  const { data, loading } = useQuery(COMPANIES_QUERY);
  return !loading ? (
    <Container>
      <TopContainer>
        <Header title="Job search"></Header>
      </TopContainer>
      <BottomContainer>
        <CenteredText customStyles={customStyles}>Bienvenid@!</CenteredText>
        <CenteredText>
          Mirá las compañias con empleos disponibles:{' '}
        </CenteredText>
        <SmallText>
          *Presioná la compañia de tu interés para ver los empleos disponibles
        </SmallText>
        <CompaniesList companies={data && data.companies}></CompaniesList>
      </BottomContainer>
    </Container>
  ) : (
    <Loader loadingText="Cargando compañias" />
  );
};

export default MainScreen;
