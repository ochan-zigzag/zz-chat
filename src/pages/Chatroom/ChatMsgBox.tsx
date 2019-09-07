import React, { useMemo } from 'react';
import styled from 'styled-components';

import { ChatMsg } from '../../services/chatMsg';

interface Props {
  chatMsg: ChatMsg;
  myUserId: string;
}

const ChatMsgBox = (props: Props) => {
  const {
    myUserId,
    chatMsg: { content, photoUrl, createdAt, userId },
  } = props;

  const isMyChat = useMemo(() => myUserId === userId, [myUserId, userId]);

  return (
    <Container isMyChat={isMyChat}>
      <ChatBox>{content}</ChatBox>
    </Container>
  );
};

export default ChatMsgBox;

const Container = styled.div<{ isMyChat: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.isMyChat ? 'flex-start' : 'flex-end')};
`;

const ChatBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;
