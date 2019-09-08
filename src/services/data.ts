import dayjs from 'dayjs';

import { ChatMsg } from '../models/chatMsg';
import Chatroom from '../models/chatroom';
import User from '../models/user';

// 서버에서 가져와야할 값들

export const usersByUserId: { [key: string]: User } = {
  me: {
    id: 'me',
    name: '나',
  },
  '장만월 사장님': {
    id: '장만월 사장님',
    name: '장만월 사장님',
    photoUrl: 'images/장만월_사장님.png',
  },
  '신정근 바텐더': {
    id: '신정근 바텐더',
    name: '신정근 바텐더',
    photoUrl: 'images/신정근_바텐더.png',
  },
  '이미라 의사': {
    id: '이미라 의사',
    name: '이미라 의사',
    photoUrl: 'images/이미라 의사.png',
  },
  '구찬성 지배인': {
    id: '구찬성 지배인',
    name: '구찬성 지배인',
    photoUrl: 'images/구찬성_지배인.png',
  },
  '노준석 총지배인': {
    id: '노준석 총지배인',
    name: '노준석 총지배인',
    photoUrl: 'images/노준석_총지배인.png',
  },
  '김유나 인턴': {
    id: '김유나 인턴',
    name: '김유나 인턴',
    photoUrl: 'images/김유나_인턴.png',
  },
  구현모: {
    id: '구현모',
    name: '구현모',
    photoUrl: 'images/구현모.png',
  },
};

const today = dayjs();

export const chatMsgsByChatroomId: { [key: string]: ChatMsg[] } = {
  '장만월 사장님': [
    {
      content: '출근했니?',
      createdAt: new Date(`2019/09/10 10:10:48`),
      id: '13',
      userId: '장만월 사장님',
    },
    {
      content: '출근했냐구?',
      createdAt: new Date('2019/09/10 10:10:58'),
      id: '3',
      userId: '장만월 사장님',
    },
    {
      content: '어딘데 출근 안하니 죽고싶니?',
      createdAt: new Date('2019/09/10 10:10:59'),
      id: '2',
      userId: '장만월 사장님',
    },
    {
      content: '해외 출장중입니다.',
      createdAt: new Date(`2019/09/${today.format('DD')} 10:11:00`),
      id: '1',
      userId: 'me',
    },
  ],
  '신정근 바텐더': [
    {
      content: '오시는 길에 와인 몇병만 사다주세요',
      createdAt: new Date(`2019/09/${today.format('DD')} 02:34:00`),
      id: '1',
      userId: '신정근 바텐더',
    },
  ],
  '이미라 의사': [
    {
      content: '휴가 잘 보내고 계신가요? 다름이 아니라 지금 어딘데 출근 안하니 죽고싶니',
      createdAt: new Date(`2019/09/${today.format('DD')} 09:32:00`),
      id: '1',
      userId: '이미라 의사',
    },
  ],
  '구찬성 지배인': [
    {
      content: '아 휴가셨군요. 약속은 다음으로 미루시죠!',
      createdAt: new Date('2019/09/05 09:32:00'),
      id: '1',
      userId: '구찬성 지배인',
    },
  ],
  '노준석 총지배인': [
    {
      content: '휴가에서 언제 돌아오시는지요. 돌아오시면 와인 몇병만 사다주세요',
      createdAt: new Date('2019/08/30 09:32:00'),
      id: '1',
      userId: '노준석 총지배인',
    },
  ],
  '김유나 인턴': [
    {
      content: '304호 키를 잃어버렸어요 어떻게 해야하죠 ㅠ',
      createdAt: new Date('2019/08/29 09:32:00'),
      id: '1',
      userId: '김유나 인턴',
    },
  ],
  구현모: [
    {
      content: '술먹자',
      createdAt: new Date('2019/08/28 09:32:00'),
      id: '1',
      userId: '구현모',
    },
  ],
};

export const chatlist: Chatroom[] = [
  {
    id: '장만월 사장님',
    lastMsg: chatMsgsByChatroomId['장만월 사장님'].slice(-1)[0],
    name: '장만월 사장님',
    photoUrl: '/images/장만월_사장님.png',
    unreadMsgCount: 2,
  },
  {
    id: '신정근 바텐더',
    lastMsg: chatMsgsByChatroomId['신정근 바텐더'].slice(-1)[0],
    name: '신정근 바텐더',
    photoUrl: '/images/신정근_바텐더.png',
    unreadMsgCount: 0,
  },
  {
    id: '이미라 의사',
    lastMsg: chatMsgsByChatroomId['이미라 의사'].slice(-1)[0],
    name: '이미라 의사',
    photoUrl: '/images/이미라_의사.png',
    unreadMsgCount: 0,
  },
  {
    id: '구찬성 지배인',
    lastMsg: chatMsgsByChatroomId['구찬성 지배인'].slice(-1)[0],
    name: '구찬성 지배인',
    photoUrl: '/images/구찬성_지배인.png',
    unreadMsgCount: 0,
  },
  {
    id: '노준석 총지배인',
    lastMsg: chatMsgsByChatroomId['노준석 총지배인'].slice(-1)[0],
    name: '노준석 총지배인',
    photoUrl: '/images/노준석_총지배인.png',
    unreadMsgCount: 0,
  },
  {
    id: '김유나 인턴',
    lastMsg: chatMsgsByChatroomId['김유나 인턴'].slice(-1)[0],
    name: '김유나 인턴',
    photoUrl: '/images/김유나_인턴.png',
    unreadMsgCount: 0,
  },
  {
    id: '구현모',
    lastMsg: chatMsgsByChatroomId['구현모'].slice(-1)[0],
    name: '구현모',
    photoUrl: '/images/구현모.png',
    unreadMsgCount: 0,
  },
  {
    id: '구현모 2',
    lastMsg: chatMsgsByChatroomId['구현모'].slice(-1)[0],
    name: '구현모 2',
    photoUrl: '/images/구현모.png',
    unreadMsgCount: 0,
  },
  {
    id: '구현모 3',
    lastMsg: chatMsgsByChatroomId['구현모'].slice(-1)[0],
    name: '구현모 3',
    photoUrl: '/images/구현모.png',
    unreadMsgCount: 0,
  },
  {
    id: '구현모 4',
    lastMsg: chatMsgsByChatroomId['구현모'].slice(-1)[0],
    name: '구현모 4',
    photoUrl: '/images/구현모.png',
    unreadMsgCount: 0,
  },
];
