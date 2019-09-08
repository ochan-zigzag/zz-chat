import dayjs from 'dayjs';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import styled from 'styled-components';

import { BLUERY_GREY, CHARCOAL_GREY, WHITE } from '../../../commons/colors';
import Chatroom from '../../../models/chatroom';
import Badge from './Badge';
import isToday from '../../../commons/isToday';
import getKoreanDayOfWeek from '../../../commons/getKoreanDayOfWeek';

const duration = 400;

interface Props {
  chatroom: Chatroom;
  push: (path: string) => void;
  inProp: boolean;
  setInProp: (inProp: boolean) => void;
}

const ChatListItem = (props: Props) => {
  const {
    chatroom: {
      id,
      photoUrl,
      name,
      unreadMsgCount,
      lastMsg: { content, createdAt },
    },
    push,
    inProp,
    setInProp,
  } = props;

  useEffect(() => {
    setInProp(true);
  }, []);

  const handleClickContainer = useCallback(() => {
    setInProp(false);
    setTimeout(() => {
      push(`/${id}`);
    });
  }, [push, id]);

  const lastDate = useMemo(() => {
    const date = dayjs(createdAt);
    if (isToday(date)) {
      return date.format('HH:mm');
    }
    return `${getKoreanDayOfWeek(date)}요일`;
  }, [createdAt]);

  return (
    <Transition
      onEnter={node => node.offsetHeight}
      in={inProp}
      timeout={{ enter: 0, exit: duration }}
      mountOnEnter
      unmountOnExit
      appear
    >
      {state => (
        <Container onClick={handleClickContainer}>
          {photoUrl ? <ProfileImage state={state} src={photoUrl} /> : <DefaultImage />}
          <ColumnContainer state={state}>
            <Name>{name}</Name>
            <LastMsgText>{content}</LastMsgText>
          </ColumnContainer>
          <RightEndContainer state={state}>
            <LastMsgDate>{lastDate}</LastMsgDate>
            <Badge count={unreadMsgCount} />
          </RightEndContainer>
        </Container>
      )}
    </Transition>
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

const ColumnContainer = styled.div<{ state: TransitionStatus }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  opacity: ${({ state }) => (state === 'entering' || state === 'entered' ? 1 : 0)};
  transform: translate3d(
    ${({ state }) => {
      if (state === 'entering' || state === 'entered') {
        return 0;
      }
      if (state === 'exiting' || state === 'exited') {
        return '-100px';
      }
      return '-100px';
    }},
    0,
    0
  );
`;

const ProfileImage = styled.img<{ state: TransitionStatus }>`
  min-width: 56px;
  height: 56px;
  border-radius: 50%;
  margin: 0 16px;
  transition: 0.3s;
  opacity: ${({ state }) => (state === 'entering' || state === 'entered' ? 1 : 0)};
  transform: translate3d(
    ${({ state }) => {
      if (state === 'entering' || state === 'entered') {
        return 0;
      }
      if (state === 'exiting' || state === 'exited') {
        return '-100px';
      }
      return '-100px';
    }},
    0,
    0
  );
`;

const DefaultImage = styled.div`
  min-width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${BLUERY_GREY};
  margin: 0 16px;
`;

const RightEndContainer = styled.div<{ state: TransitionStatus }>`
  position: absolute;
  top: 0;
  right: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  transition: 0.4s;
  opacity: ${({ state }) => (state === 'entering' || state === 'entered' ? 1 : 0)};
  transform: translate3d(
    ${({ state }) => {
      if (state === 'entering' || state === 'entered') {
        return 0;
      }
      if (state === 'exiting' || state === 'exited') {
        return '-100px';
      }
      return '-100px';
    }},
    0,
    0
  );
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
