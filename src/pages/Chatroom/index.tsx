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
import SearchButton from './Header/SearchButton';
import UploadButton from './Header/UploadButton';
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

  if (loadingChatroom || !chatroom || !myUser) {
    return <p>loading...</p>;
  }

  return (
    <Container>
      <Header
        leftComponent={<BackButton />}
        title={chatroom.name}
        rightComponent={
          <>
            <UploadButton onClickUpload={handleClickUpload} />
            <Divider />
            <SearchButton />
          </>
        }
      />
      <GalleryCarousel isVisible={isGalleryCarouselVisible} chatroomId={chatroomId} userId={myUser.id} />
      <Transition in={isGalleryCarouselVisible} timeout={duration}>
        {state => <ChatMsgContainer state={state} myUser={myUser} chatMsgs={chatMsgs} />}
      </Transition>

      <Bottom myUserId={myUser.id} addMsg={addMsg} />

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
`;

const Divider = styled.div`
  width: 16px;
`;
