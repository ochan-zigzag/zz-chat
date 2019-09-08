import React, { useCallback } from 'react';
import { TransitionStatus } from 'react-transition-group/Transition';
import styled from 'styled-components';

interface Props {
  state: TransitionStatus;
}

const SearchButton = (props: Props) => {
  const { state } = props;

  const handleClick = useCallback(() => {
    // TODO
  }, []);

  return <Image state={state} src="images/ic-search.svg" onClick={handleClick} />;
};

export default SearchButton;

const Image = styled.img<{ state: TransitionStatus }>`
  transition: 0.3s;
  opacity: ${({ state }) => (state === 'entering' || state === 'entered' ? 1 : 0)};
  transform: translate3d(
    ${({ state }) => {
      if (state === 'entering' || state === 'entered') {
        return 0;
      }
      if (state === 'exiting' || state === 'exited') {
        return '60px';
      }
      return '60px';
    }},
    0,
    0
  );
`;
