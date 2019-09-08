import { useObserver } from 'mobx-react-lite';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import uuidv1 from 'uuid/v1';

import { sleep } from '../commons/utils';
import { ChatMsg, NewChatMsg } from '../models/chatMsg';
import ChatMsgStore from '../store/chatMsgStore';
import { chatMsgsByChatroomId } from './data';

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
  await sleep(100);
  return msgs ? msgs.slice(offset, limit) : [];
};

export const useChatMsgs = (
  chatroomId: string,
): {
  chatMsgs: ChatMsg[];
  loading: boolean;
  error: Error | undefined;
  fetchMore: () => Promise<void>;
  addMsg: (newChatMsg: NewChatMsg) => Promise<void>;
} => {
  const chatMsgStore = useContext(ChatMsgStore);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [offset, setOffset] = useState(0);

  const fetchMore = useCallback(async () => {
    // TODO: this is offset/limit-based. Use cursor-based instead
    try {
      setLoading(true);
      const newOffset = offset + CHAT_MSGS_PAGE;
      setOffset(newOffset);
      const data = await getUserChatMsgs({ chatroomId, offset: newOffset, limit: CHAT_MSGS_PAGE });
      chatMsgStore.appendChatMsgs(chatroomId, data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [offset]);

  const addMsg = useCallback(async (newChatMsg: NewChatMsg) => {
    // TODO: 실제로 서버로 요청하는 로직이 있어야함.
    chatMsgStore.appendChatMsgs(chatroomId, [
      {
        ...newChatMsg,
        createdAt: new Date(),
        id: uuidv1(),
      },
    ]);
  }, []);

  useEffect(() => {
    const fetchChatMsgs = async () => {
      try {
        if (chatMsgStore.getChatMsgs(chatroomId).length > 0) {
          return;
        }
        setLoading(true);
        const data = await getUserChatMsgs({ chatroomId, offset, limit: CHAT_MSGS_PAGE });

        chatMsgStore.appendChatMsgs(chatroomId, data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchChatMsgs();
  }, []);

  return useObserver(() => ({ chatMsgs: chatMsgStore.getChatMsgs(chatroomId), loading, error, fetchMore, addMsg }));
};
