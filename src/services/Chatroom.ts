import React, { useEffect, useState } from 'react';

import { sleep } from '../commons/utils';
import { ChatMsg } from './chatMsg';
import { chatlist } from './data';

export interface ChatRoom {
  id: string;
  name: string;
  photoUrl?: string;
  lastMsg: ChatMsg;
  unreadMsgCount: number;
}

const getChatroom = async (chatroomId: string) => {
  await sleep(500);
  // 서버에서 가져왔다고 가정
  return chatlist.find(({ id }) => id === chatroomId);
};

export const useChatroom = (chatroomId: string): [ChatRoom | undefined, boolean, Error | undefined] => {
  const [chatroom, setChatroom] = useState<ChatRoom | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchChatroom = async () => {
      try {
        setLoading(true);
        const data = await getChatroom(chatroomId);
        setChatroom(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchChatroom();
  }, []);

  return [chatroom, loading, error];
};
