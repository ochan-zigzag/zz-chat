import React from 'react';
import { useDrop } from 'react-dnd';
import { TransitionStatus } from 'react-transition-group/Transition';
import styled from 'styled-components';

import { ChatMsg } from '../../models/chatMsg';
import User from '../../models/user';
import ChatMsgBox from './ChatMsgBox';
import { ITEM_TYPE } from './Upload/DraggableImage';
import { GALLERY_CAROUSEL_HEIGHT } from './Upload/GalleryCarousel';

interface Props {
  state: TransitionStatus;
  myUser: User;
  chatMsgs: ChatMsg[];
}

const ChatMsgContainer = (props: Props) => {
  const { state, myUser, chatMsgs } = props;

  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    drop: () => ({ name: 'chatMsgContainer' }),
    collect: monitor => ({ isOver: monitor.isOver() }),
  });
  return (
    <Container ref={drop} state={state}>
      {chatMsgs.map(chatMsg => (
        <ChatMsgBox key={chatMsg.id} chatMsg={chatMsg} myUserId={myUser.id} />
      ))}
    </Container>
  );
};

export default ChatMsgContainer;

const Container = styled.div<{ state: TransitionStatus }>`
  flex: 1;
  margin-top: ${({ state }) => (state === 'entering' || state === 'entered' ? GALLERY_CAROUSEL_HEIGHT : 0)};
  transition: margin-top 0.3s;
`;
