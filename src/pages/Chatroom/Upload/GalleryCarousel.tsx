import React from 'react';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import styled from 'styled-components';

import { PURPLE } from '../../../commons/colors';
import { HEADER_HEIGHT } from '../../../components/Header';
import DraggableImage from './DraggableImage';

const imageUrls = [
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

export const GALLERY_CAROUSEL_HEIGHT = '68px';

const GalleryCarousel = (props: Props) => {
  const { isVisible } = props;

  return (
    <Transition in={isVisible} timeout={duration}>
      {state => (
        <Container state={state}>
          {imageUrls.map(url => (
            <DraggableImage key={url} src={url} state={state} />
          ))}
          <Divider />
        </Container>
      )}
    </Transition>
  );
};

export default GalleryCarousel;

const Container = styled.div<{ state: TransitionStatus }>`
  position: absolute;
  top: ${HEADER_HEIGHT};
  left: 0;
  width: calc(100% - 32px);
  height: ${({ state }) => (state === 'entering' || state === 'entered' ? GALLERY_CAROUSEL_HEIGHT : 0)};
  background-color: ${PURPLE};
  display: flex;
  padding: 0 16px;
  overflow-y: hidden;
  align-items: center;
  transition: height 0.3s;
`;

const Divider = styled.div`
  height: 100%;
  min-width: 6px;
`;
