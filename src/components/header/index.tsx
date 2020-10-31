import React, { FC } from 'react';
import {
  BoldTitleWhite,
  FlexContainer,
  StatusBarOffset,
  TextContainer,
} from './styles';

interface HeaderProps {
  title: string;
  img?: string;
}

const Header: FC<HeaderProps> = ({ title = '' }) => (
  <FlexContainer>
    <StatusBarOffset />
    <TextContainer>
      <BoldTitleWhite>{title}</BoldTitleWhite>
    </TextContainer>
  </FlexContainer>
);

export default Header;
