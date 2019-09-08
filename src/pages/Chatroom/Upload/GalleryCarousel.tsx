import React, { useCallback, useContext } from 'react';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import styled from 'styled-components';

import { PURPLE } from '../../../commons/colors';
import { HEADER_HEIGHT } from '../../../components/Header';
import ChatMsgStore from '../../../store/chatMsgStore';
import DraggableImage from './DraggableImage';

const imageUrls = [
  'images/img-shot-1.png',
  'images/img-shot-2.png',
  'images/img-shot-3.png',
  'images/img-shot-4.png',
  'images/img-shot-5.png',
  'images/구현모.png',
  'images/김유나_인턴.png',
  'images/노준석_총지배인.png',
  'images/신정근_바텐더.png',
  'images/장만월_사장님.png',
];

const duration = 300;

interface Props {
  isVisible: boolean;
  chatroomId: string;
  userId: string;
}

export const GALLERY_CAROUSEL_HEIGHT = '68px';

const GalleryCarousel = (props: Props) => {
  const { isVisible, chatroomId, userId } = props;
  const chatMsgStore = useContext(ChatMsgStore);

  const handleUpload = useCallback(
    (src: string) => {
      chatMsgStore.uploadImage({
        src,
        chatroomId,
        userId,
      });
    },
    [chatMsgStore.uploadImage],
  );

  return (
    <Transition in={isVisible} timeout={duration}>
      {state => (
        <Container state={state}>
          {imageUrls.map(url => (
            <DraggableImage key={url} src={url} state={state} onUpload={handleUpload} />
          ))}
          <Divider />
        </Container>
      )}
    </Transition>
  );
};

export default GalleryCarousel;

const Container = styled.div<{ state: TransitionStatus }>`
  position: fixed;
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
  z-index: 100;
`;

const Divider = styled.div`
  height: 100%;
  min-width: 6px;
`;
