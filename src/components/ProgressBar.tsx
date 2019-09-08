import React from 'react';
import styled from 'styled-components';

import { LIGHT_GREY, PURPLE } from '../commons/colors';

interface Props {
  progress: number;
}

const ProgressBar = React.memo((props: Props) => {
  const { progress } = props;
  return (
    <Container>
      <Tracker progress={progress} />
    </Container>
  );
});

export default ProgressBar;

const Container = styled.div`
  width: 200px;
  height: 6px;
  background: ${LIGHT_GREY};
  border-radius: 3px;
`;

const Tracker = styled.div<{ progress: number }>`
  height: 6px;
  background: ${PURPLE};
  border-radius: 3px;
  transition: width 0.2s;
  width: ${props => `${props.progress}%`};
`;
