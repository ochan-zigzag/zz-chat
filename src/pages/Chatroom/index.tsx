import React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

import Header from '../../components/Header';
import { useChatMsgs } from '../../services/chatMsg';
import { useChatroom } from '../../services/chatroom';
import { useMyUser } from '../../services/user';
import ChatMsgBox from './ChatMsgBox';

const Chatroom = (props: RouteComponentProps<{ chatroomId: string }>) => {
  const { chatroomId } = props.match.params;
  const [chatroom, loadingChatroom, errorChatroom] = useChatroom(chatroomId);
  const [chatMsgs, loadingChatMsgs, errorChatMsgs, fetchMore] = useChatMsgs(chatroomId);
  const [myUser, loadingMyUser, errorMyUser] = useMyUser();

  if (loadingChatroom || !chatroom || !myUser) {
    return <p>loading...</p>;
  }

  const { name } = chatroom;

  console.log({ chatMsgs });

  return (
    <Container>
      <Header title={name} />
      <ChatMsgsContainer>
        {chatMsgs.map(chatMsg => (
          <ChatMsgBox key={chatMsg.id} chatMsg={chatMsg} myUserId={myUser.id} />
        ))}
      </ChatMsgsContainer>
    </Container>
  );
};

export default Chatroom;

const Container = styled.div`
  overflow: hidden;
`;

const ChatMsgsContainer = styled.div`
  width: 100%;
`;
