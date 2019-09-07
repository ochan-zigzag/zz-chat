import { action, observable } from 'mobx';
import { createContext } from 'react';

import { ChatMsg } from '../models/chatMsg';

class ChatMsgStore {
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
}

export default createContext(new ChatMsgStore());
