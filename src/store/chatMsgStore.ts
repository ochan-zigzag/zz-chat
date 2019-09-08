import { action, observable, runInAction } from 'mobx';
import { createContext } from 'react';
import uuid from 'uuid';

import { sleep } from '../commons/utils';
import { ChatMsg } from '../models/chatMsg';

class ChatMsgStore {
  @observable
  public uploadingImageUrl: string | null = null;

  @observable
  private chatMsgsByChatroomId = new Map<string, ChatMsg[]>();

  @action.bound
  public appendChatMsgs(chatroomId: string, chatMsgs: ChatMsg[]) {
    const prevChatMsgs = this.getChatMsgs(chatroomId);
    this.chatMsgsByChatroomId.set(chatroomId, prevChatMsgs ? [...prevChatMsgs, ...chatMsgs] : chatMsgs);
  }

  public getChatMsgs = (chatroomId: string) => {
    return this.chatMsgsByChatroomId.get(chatroomId) || [];
  };

  @action.bound
  public async uploadImage({ src, chatroomId, userId }: { src: string; chatroomId: string; userId: string }) {
    this.uploadingImageUrl = src;

    await sleep(2000);

    this.appendChatMsgs(chatroomId, [
      {
        userId,
        photoUrl: src,
        id: uuid(),
        createdAt: new Date(),
        content: '',
      },
    ]);

    runInAction(() => {
      this.uploadingImageUrl = null;
    });
  }
}

export default createContext(new ChatMsgStore());
