import { ChatMsg } from './chatMsg';

export default interface Chatroom {
  id: string;
  name: string;
  photoUrl?: string;
  lastMsg: ChatMsg;
  unreadMsgCount: number;
}
