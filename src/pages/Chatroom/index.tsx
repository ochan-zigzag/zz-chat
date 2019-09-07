import React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

import Header from '../../components/Header';
import { useChatroom } from '../../services/chatroom';

const Chatroom = (props: RouteComponentProps<{ chatroomId: string }>) => {
  const { chatroomId } = props.match.params;
  const [chatroom, loading, error] = useChatroom({ chatroomId });

  if (loading || !chatroom) {
    return <p>loading...</p>;
  }

  const { name } = chatroom;

  return (
    <Container>
      <Header title={name} />
    </Container>
  );
};

export default Chatroom;

const Container = styled.div``;
