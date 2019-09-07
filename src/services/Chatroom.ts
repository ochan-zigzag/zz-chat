import React, { useEffect, useState } from 'react';

import { sleep } from '../commons/utils';
import { chatlist } from './data';

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
