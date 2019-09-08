import React, { useEffect, useMemo } from 'react';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import styled from 'styled-components';

import { CHARCOAL_GREY_TWO, PURPLE, WHITE } from '../../commons/colors';
import { ChatMsg } from '../../models/chatMsg';

const duration = 400;

interface Props {
  chatMsg: ChatMsg;
  myUserId: string;
  inProp: boolean;
  setInProp: (inProp: boolean) => void;
}

const ChatMsgBox = (props: Props) => {
  const {
    myUserId,
    chatMsg: { content, userId, photoUrl },
    inProp,
    setInProp,
  } = props;

  useEffect(() => {
    setInProp(true);
    return () => setInProp(false);
  }, []);

  const isMyChat = useMemo(() => myUserId === userId, [myUserId, userId]);

  return (
    <Transition
      onEnter={node => node.offsetHeight}
      in={inProp}
      timeout={{ enter: 0, exit: duration }}
      mountOnEnter
      unmountOnExit
      appear
    >
      {state => (
        <Container isMyChat={isMyChat}>
          {photoUrl ? (
            <Image src={photoUrl} />
          ) : (
            <ChatBox state={state} isMyChat={isMyChat}>
              {content}
            </ChatBox>
          )}
        </Container>
      )}
    </Transition>
  );
};

export default ChatMsgBox;

const Container = styled.div<{ isMyChat: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.isMyChat ? 'flex-end' : 'flex-start')};
  padding: 10px 16px 0;
`;

const ChatBox = styled.div<{ isMyChat: boolean; state: TransitionStatus }>`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 12px;
  border-radius: 12px;
  background-color: ${props => (props.isMyChat ? PURPLE : WHITE)};
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.isMyChat ? WHITE : CHARCOAL_GREY_TWO)};
  transition: 0.3s;
  opacity: ${({ state }) => (state === 'entering' || state === 'entered' ? 1 : 0)};
  transform: translate3d(
    ${({ state }) => {
      if (state === 'entering' || state === 'entered') {
        return 0;
      }
      if (state === 'exiting' || state === 'exited') {
        return '100px';
      }
      return '100px';
    }},
    0,
    0
  );
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 12px;
`;
