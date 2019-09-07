import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import styled from 'styled-components';

import { BLUERY_GREY, CHARCOAL_GREY, WHITE } from '../../../commons/colors';
import { ColumnContainer, RowSpaceBetweenContainer } from '../../../commons/styles';
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
        <RowSpaceBetweenContainer>
          <Name>{name}</Name>
          <LastMsgDate>{lastDate}</LastMsgDate>
        </RowSpaceBetweenContainer>
        <RowSpaceBetweenContainer>
          <LastMsgText>{content}</LastMsgText>
          <Badge count={unreadMsgCount} />
        </RowSpaceBetweenContainer>
      </ColumnContainer>
    </Container>
  );
};

export default ChatListItem;

const Container = styled.div`
  height: 74px;
  background-color: ${WHITE};
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 16px;
`;

const DefaultImage = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${BLUERY_GREY};
  margin-right: 16px;
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
`;

// TODO: ... 보여주기
const LastMsgText = styled.span`
  font-size: 13px;
  color: ${BLUERY_GREY};
`;
