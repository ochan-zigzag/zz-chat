import React from 'react'
import styled from 'styled-components'

import Header from '../../components/Header'
import { useChatList } from '../../services/chatList'
import ChatListItem from './ChatListItem'
import MenuButton from './Header/MenuButton'
import MyPageButton from './Header/MyPageButton'

const ChatList = () => {
  const [chatList, loading, error] = useChatList();
  return (
    <Container>
      <Header leftComponent={<MenuButton />} title="채팅" rightComponent={<MyPageButton />} />
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
