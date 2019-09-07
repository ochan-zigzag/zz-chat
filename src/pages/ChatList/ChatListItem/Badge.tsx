import React from 'react';
import styled from 'styled-components';
import { PURPLE, WHITE } from '../../../commons/colors';

interface Props {
  count: number;
}
const Badge = (props: Props) => {
  const { count } = props;

  return (
    <Container shouldVisible={count > 0}>
      <Count>{count}</Count>
    </Container>
  );
};

export default Badge;

const Container = styled.div<{ shouldVisible: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${PURPLE};
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${props => (props.shouldVisible ? 'visible' : 'hidden')};
`;

const Count = styled.span`
  font-size: 10px;
  font-weight: bold;
  color: ${WHITE};
`;
