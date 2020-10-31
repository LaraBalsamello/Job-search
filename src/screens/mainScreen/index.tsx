import React, { FC } from 'react';
import Header from 'components/header/index';
import CompaniesList from 'components/companiesList';
import { BottomContainer, Container, TopContainer } from './styles';
import { CenteredText } from 'assets/styles/main';

const MainScreen: FC = () => (
  <Container>
    <TopContainer>
      <Header img="" title="Job search"></Header>
    </TopContainer>
    <BottomContainer>
      <CenteredText customStyles>Bienvenid@!</CenteredText>
      <CenteredText>Mirá las compañias con empleos disponibles: </CenteredText>
      {/* <CenteredText>
        *Presioná la compañia de tu interés para ver los empleos disponibles
      </CenteredText> */}
      <CompaniesList></CompaniesList>
    </BottomContainer>
  </Container>
);

export default MainScreen;
