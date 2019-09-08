import React, { useCallback, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

import Header from '../../components/Header';
import { useChatList } from '../../services/chatList';
import ChatListItem from './ChatListItem';
import MenuButton from './Header/MenuButton';
import MyPageButton from './Header/MyPageButton';
import Title from './Header/Title';

const ChatList = (props: RouteComponentProps) => {
  const [chatList, loading, error] = useChatList();
  const [inProp, setInProp] = useState(false);

  const push = useCallback((path: string) => {
    props.history.push(path);
  }, []);

  return (
    <Container>
      <Header leftComponent={<MenuButton />} title={<Title title="채팅" />} rightComponent={<MyPageButton />} />
      <ChatListContainer>
        {chatList.map(chatroom => (
          <ChatListItem inProp={inProp} setInProp={setInProp} push={push} key={chatroom.id} chatroom={chatroom} />
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
