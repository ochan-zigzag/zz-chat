import React, { useEffect, useState } from 'react';

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

const getChatroom = async (chatroomId: string) => {
  return chatlist.find(({ id }) => id === chatroomId);
};

interface Props {
  chatroomId: string;
}

export const useChatroom = (props: Props): [ChatRoom | undefined, boolean, Error | undefined] => {
  const { chatroomId } = props;
  const [chatroom, setChatroom] = useState<ChatRoom | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

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
