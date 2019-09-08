import React, { useCallback, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

import { GREY } from '../../commons/colors';
import Header from '../../components/Header';
import { useChatMsgs } from '../../services/chatMsg';
import { useChatroom } from '../../services/chatroom';
import { useMyUser } from '../../services/user';
import Bottom from './Bottom';
import ChatMsgBox from './ChatMsgBox';
import BackButton from './Header/BackButton';
import SearchButton from './Header/SearchButton';
import UploadButton from './Header/UploadButton';
import GalleryCarousel from './Upload/GalleryCarousel';

const Chatroom = (props: RouteComponentProps<{ chatroomId: string }>) => {
  const { chatroomId } = props.match.params;
  const [chatroom, loadingChatroom, errorChatroom] = useChatroom(chatroomId);
  const { chatMsgs, loading: loadingChatMsgs, error: errorChatMsgs, fetchMore, addMsg } = useChatMsgs(chatroomId);
  const [myUser, loadingMyUser, errorMyUser] = useMyUser();
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

      <GalleryCarousel isVisible={isGalleryCarouselVisible} />

      {chatMsgs.map(chatMsg => (
        <ChatMsgBox key={chatMsg.id} chatMsg={chatMsg} myUserId={myUser.id} />
      ))}

      <Bottom myUserId={myUser.id} addMsg={addMsg} />
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
