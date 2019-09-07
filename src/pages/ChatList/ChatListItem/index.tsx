import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import styled from 'styled-components';

import { BLUERY_GREY, CHARCOAL_GREY, WHITE } from '../../../commons/colors';
import { ColumnContainer } from '../../../commons/styles';
import { ChatRoom } from '../../../services/Chatroom';
import Badge from './Badge';

interface Props {
  chatroom: ChatRoom;
}

const ChatListItem = (props: Props) => {
  const {
    chatroom: {
      photoUrl,
      name,
      unreadMsgCount,
      lastMsg: { content, createdAt },
    },
  } = props;

  const lastDate = useMemo(() => dayjs(createdAt).format('HH:mm'), [createdAt]);

  return (
    <Container>
      {photoUrl ? <ProfileImage src={photoUrl} /> : <DefaultImage />}
      <ColumnContainer>
        <Name>{name}</Name>
        <LastMsgText>{content}</LastMsgText>
      </ColumnContainer>
      <RightEndContainer>
        <LastMsgDate>{lastDate}</LastMsgDate>
        <Badge count={unreadMsgCount} />
      </RightEndContainer>
    </Container>
  );
};

export default ChatListItem;

const Container = styled.div`
  height: 74px;
  width: 100%;
  background-color: ${WHITE};
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
`;

const ProfileImage = styled.img`
  min-width: 56px;
  height: 56px;
  border-radius: 50%;
  margin: 0 16px;
`;

const DefaultImage = styled.div`
  min-width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${BLUERY_GREY};
  margin: 0 16px;
`;

const RightEndContainer = styled.div`
  position: absolute;
  top: 0;
  right: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const Name = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${CHARCOAL_GREY};
  margin-bottom: 2px;
`;

const LastMsgDate = styled.span`
  font-size: 11px;
  color: ${BLUERY_GREY};
  margin-bottom: 6px;
`;

const LastMsgText = styled.span`
  font-size: 13px;
  max-width: 65%;
  color: ${BLUERY_GREY};
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
