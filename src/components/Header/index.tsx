import React from 'react';
import styled from 'styled-components';
import { PURPLE, WHITE } from '../../commons/colors';

interface Props {
  title: string;
}
const Header = (props: Props) => {
  const { title } = props;

  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  background-color: ${PURPLE};
  z-index: 10;
`;

const Title = styled.span`
  font-size: 17px;
  color: ${WHITE};
`;
