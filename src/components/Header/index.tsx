import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { PURPLE, WHITE } from '../../commons/colors';

interface Props {
  title: string;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
}

export const HEADER_HEIGHT = '44px';

const Header = (props: Props) => {
  const { title, leftComponent, rightComponent } = props;

  return (
    <Container>
      <LeftContainer>{leftComponent}</LeftContainer>
      <Title>{title}</Title>
      <RightContainer>{rightComponent}</RightContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${HEADER_HEIGHT};
  background-color: ${PURPLE};
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 17px;
  font-weight: bold;
  color: ${WHITE};
`;

const LeftContainer = styled.div`
  position: absolute;
  left: 12px;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content; center;
  align-items: center;
`;

const RightContainer = styled.div`
  position: absolute;
  right: 12px;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content; center;
  align-items: center;
`;
