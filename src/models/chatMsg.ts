export interface ChatMsg {
  id: string;
  content: string;
  photoUrl?: string;
  createdAt: Date;
  userId: string;
}

export interface NewChatMsg {
  content: string;
  userId: string;
  photoUrl?: string;
}
