import React from 'react';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import styled from 'styled-components';

import { PURPLE } from '../../../commons/colors';

const imageUrls = [
  'images/img-shot-1.png',
  'images/img-shot-2.png',
  'images/img-shot-3.png',
  'images/img-shot-4.png',
  'images/img-shot-5.png',
  'images/img-shot-1.png',
  'images/img-shot-2.png',
  'images/img-shot-3.png',
  'images/img-shot-4.png',
  'images/img-shot-5.png',
];

const duration = 300;

interface Props {
  isVisible: boolean;
}

const GalleryCarousel = (props: Props) => {
  const { isVisible } = props;

  return (
    <Transition in={isVisible} timeout={duration}>
      {state => (
        <Container state={state}>
          {imageUrls.map(url => (
            <Image state={state} key={url} src={url} />
          ))}
          <Divider />
        </Container>
      )}
    </Transition>
  );
};

export default GalleryCarousel;

const Container = styled.div<{ state: TransitionStatus }>`
  width: calc(100% - 32px);
  height: 68px;
  background-color: ${PURPLE};
  display: flex;
  padding: 0 16px;
  overflow-y: hidden;
  align-items: center;
  transition: 0.3s;
  transform: translate3d(0, ${({ state }) => (state === 'entering' || state === 'entered' ? 0 : '-68px')}, 0);
`;

const Image = styled.img<{ state: TransitionStatus }>`
  min-width: 46px;
  height: 46px;
  border-radius: 4px;
  margin-right: 10px;
  transition: 0.3s;
  transform: scale(${({ state }) => (state === 'entering' || state === 'entered' ? 1 : 0)});
`;

const Divider = styled.div`
  height: 100%;
  min-width: 6px;
`;
