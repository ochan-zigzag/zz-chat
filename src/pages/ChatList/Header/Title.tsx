import React, { useEffect, useState } from 'react';
import Transition, { TransitionStatus } from 'react-transition-group/Transition';
import styled from 'styled-components';

import { WHITE } from '../../../commons/colors';

const duration = 300;

interface Props {
  title: string;
}

const Title = (props: Props) => {
  const { title } = props;

  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
    return () => setInProp(false);
  }, []);

  return (
    <Transition
      onEnter={node => node.offsetHeight}
      in={inProp}
      timeout={{ enter: 0, exit: duration }}
      mountOnEnter
      unmountOnExit
      appear
    >
      {state => <Container state={state}>{title}</Container>}
    </Transition>
  );
};

export default Title;

const Container = styled.span<{ state?: TransitionStatus }>`
  font-size: 17px;
  font-weight: bold;
  color: ${WHITE};
  transition: 0.3s;
  opacity: ${({ state }) => (state === 'entering' || state === 'entered' ? 1 : 0)};
  transform: translate3d(
    ${({ state }) => {
      if (state === 'entering' || state === 'entered') {
        return 0;
      }
      if (state === 'exiting' || state === 'exited') {
        return '50px';
      }
      return '50px';
    }},
    0,
    0
  );
`;
