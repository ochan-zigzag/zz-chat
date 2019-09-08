import React, { useMemo } from 'react';
import styled from 'styled-components';

import { CHARCOAL_GREY_TWO, PURPLE, WHITE } from '../../commons/colors';
import { ChatMsg } from '../../models/chatMsg';

interface Props {
  chatMsg: ChatMsg;
  myUserId: string;
}

const ChatMsgBox = (props: Props) => {
  const {
    myUserId,
    chatMsg: { content, userId, photoUrl },
  } = props;

  const isMyChat = useMemo(() => myUserId === userId, [myUserId, userId]);

  return (
    <Container isMyChat={isMyChat}>
      {photoUrl ? <Image src={photoUrl} /> : <ChatBox isMyChat={isMyChat}>{content}</ChatBox>}
    </Container>
  );
};

export default ChatMsgBox;

const Container = styled.div<{ isMyChat: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.isMyChat ? 'flex-end' : 'flex-start')};
  padding: 10px 16px 0;
`;

const ChatBox = styled.div<{ isMyChat: boolean }>`
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
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 12px;
`;
