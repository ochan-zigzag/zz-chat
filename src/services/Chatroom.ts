import React, { useEffect, useState } from 'react';

import { sleep } from '../commons/utils';

export interface ChatMsg {
  content: string;
  photoUrl?: string;
  createdAt: Date;
  userId: string;
}

export interface ChatRoom {
  id: string;
  name: string;
  photoUrl?: string;
  lastMsg: ChatMsg;
  unreadMsgCount: number;
}

const chatlist: ChatRoom[] = [
  {
    id: '1',
    lastMsg: {
      content: '어딘데 출근 안하니 죽고싶니',
      createdAt: new Date('2019-09-08 09:32:00'),
      userId: '',
    },
    name: '장만월 사장님',
    photoUrl: '',
    unreadMsgCount: 2,
  },
];

export const getChatList = async (): Promise<ChatRoom[]> => {
  await sleep(1000);
  return chatlist;
};

export const useChatList = (): [ChatRoom[], boolean, Error?] => {
  const [chatList, setChatList] = useState<ChatRoom[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const fetchChatList = async () => {
      try {
        setLoading(true);
        const data = await getChatList();
        setChatList(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchChatList();
  }, []);

  return [chatList, loading, error];
};
