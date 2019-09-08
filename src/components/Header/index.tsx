import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { PURPLE } from '../../commons/colors';

interface Props {
  title: ReactNode;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
}

export const HEADER_HEIGHT = '44px';

const Header = (props: Props) => {
  const { title, leftComponent, rightComponent } = props;

  return (
    <Container>
      <LeftContainer>{leftComponent}</LeftContainer>
      {title}
      <RightContainer>{rightComponent}</RightContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${HEADER_HEIGHT};
  background-color: ${PURPLE};
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
