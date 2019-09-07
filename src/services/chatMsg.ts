import React, { useCallback, useEffect, useState } from 'react';

import { sleep } from '../commons/utils';
import { chatMsgsByChatroomId } from './data';

export interface ChatMsg {
  id: string;
  content: string;
  photoUrl?: string;
  createdAt: Date;
  userId: string;
}

const CHAT_MSGS_PAGE = 10;

const getUserChatMsgs = async ({
  chatroomId,
  offset,
  limit,
}: {
  chatroomId: string;
  offset: number;
  limit: number;
}) => {
  // 실제론 서버에서 fetch 해야할 로직
  const msgs = chatMsgsByChatroomId[chatroomId];
  return msgs ? msgs.slice(offset, limit) : [];
};

export const useChatMsgs = (chatroomId: string): [ChatMsg[], boolean, Error | undefined, () => Promise<void>] => {
  const [chatMsgs, setChatMsgs] = useState<ChatMsg[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [offset, setOffset] = useState(0);

  const fetchMore = useCallback(async () => {
    // TODO: this is offset/limit-based. Use cursor-based instead
    try {
      setLoading(true);
      const newOffset = offset + CHAT_MSGS_PAGE;
      setOffset(newOffset);
      await sleep(500);
      const data = await getUserChatMsgs({ chatroomId, offset: newOffset, limit: CHAT_MSGS_PAGE });
      setChatMsgs([...chatMsgs, ...data]);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [offset]);

  useEffect(() => {
    const fetchChatMsgs = async () => {
      try {
        setLoading(true);
        await sleep(1000);
        const data = await getUserChatMsgs({ chatroomId, offset, limit: CHAT_MSGS_PAGE });
        setChatMsgs(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchChatMsgs();
  }, []);

  return [chatMsgs, loading, error, fetchMore];
};
