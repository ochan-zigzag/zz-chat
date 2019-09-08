import React, { useCallback, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';

import { GREY } from '../../commons/colors';
import CustomDragLayer from '../../components/CustomDragLayer';
import Header from '../../components/Header';
import { useChatMsgs } from '../../services/chatMsg';
import { useChatroom } from '../../services/chatroom';
import { useMyUser } from '../../services/user';
import Bottom from './Bottom';
import ChatMsgContainer from './ChatMsgContainer';
import BackButton from './Header/BackButton';
import RightContainer from './Header/RightContainer';
import Title from './Header/Title';
import GalleryCarousel from './Upload/GalleryCarousel';

const duration = 300;

const Chatroom = (props: RouteComponentProps<{ chatroomId: string }>) => {
  const { chatroomId } = props.match.params;
  const [chatroom, loadingChatroom] = useChatroom(chatroomId);
  const { chatMsgs, fetchMore, addMsg } = useChatMsgs(chatroomId);
  const [myUser] = useMyUser();
  const [isGalleryCarouselVisible, setIsGalleryCarouselVisible] = useState(false);

  const handleClickUpload = useCallback(() => {
    setIsGalleryCarouselVisible(!isGalleryCarouselVisible);
  }, [isGalleryCarouselVisible]);

  const handleClickBack = useCallback(() => {
    props.history.push('/');
  }, []);

  return (
    <Container>
      <Header
        leftComponent={<BackButton onClickBack={handleClickBack} />}
        title={<Title title={chatroom ? chatroom.name : ''} />}
        rightComponent={<RightContainer onClickUpload={handleClickUpload} />}
      />
      {loadingChatroom || !chatroom || !myUser ? (
        <>{/* TODO: 스켈레톤 보여주기 */}</>
      ) : (
        <>
          <GalleryCarousel isVisible={isGalleryCarouselVisible} chatroomId={chatroomId} userId={myUser.id} />
          <Transition in={isGalleryCarouselVisible} timeout={duration}>
            {state => <ChatMsgContainer state={state} myUser={myUser} chatMsgs={chatMsgs} />}
          </Transition>

          <Bottom myUserId={myUser.id} addMsg={addMsg} />
        </>
      )}

      <CustomDragLayer />
    </Container>
  );
};

export default Chatroom;

const Container = styled.div`
  padding-top: 44px;
  padding-bottom: 100px;
  background-color: ${GREY};
  min-height: calc(100vh - 144px);
  display: flex;
  flex-direction: column;
`;
