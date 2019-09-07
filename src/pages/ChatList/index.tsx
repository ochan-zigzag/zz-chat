import React, { useEffect } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import { useChatList } from '../../services/Chatroom';
import ChatListItem from './ChatListItem';

interface Props {}

const ChatList = (props: Props) => {
  const [chatList, loading, error] = useChatList();
  return (
    <Container>
      <Header title="채팅" />
      <ChatListContainer>
        {chatList.map(chatroom => (
          <ChatListItem key={chatroom.id} chatroom={chatroom} />
        ))}
      </ChatListContainer>
    </Container>
  );
};

export default ChatList;

const Container = styled.div`
  overflow: hidden;
`;

const ChatListContainer = styled.div`
  width: 100%;
  padding-top: 44px;
`;
