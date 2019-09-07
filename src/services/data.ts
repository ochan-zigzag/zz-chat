// 서버에서 가져와야할 값들

import { ChatRoom } from './Chatroom';

export const chatlist: ChatRoom[] = [
  {
    id: '1',
    lastMsg: {
      content: '어딘데 출근 안하니 죽고싶니',
      createdAt: new Date('2019-09-08 09:32:00'),
      userId: '',
    },
    name: '장만월 사장님',
    photoUrl: '/images/장만월_사장님.png',
    unreadMsgCount: 2,
  },
  {
    id: '2',
    lastMsg: {
      content: '오시는 길에 와인 몇병만 사다주세요',
      createdAt: new Date('2019-09-08 02:34:00'),
      userId: '',
    },
    name: '신정근 바텐더',
    photoUrl: '/images/신정근_바텐더.png',
    unreadMsgCount: 0,
  },
  {
    id: '3',
    lastMsg: {
      content: '휴가 잘 보내고 계신가요? 다름이 아니라 지금 어딘데 출근 안하니 죽고싶니',
      createdAt: new Date('2019-09-06 09:32:00'),
      userId: '',
    },
    name: '이미라 의사',
    photoUrl: '/images/이미라_의사.png',
    unreadMsgCount: 0,
  },
  {
    id: '4',
    lastMsg: {
      content: '아 휴가셨군요. 약속은 다음으로 미루시죠!',
      createdAt: new Date('2019-09-05 09:32:00'),
      userId: '',
    },
    name: '구찬성 지배인',
    photoUrl: '/images/구찬성_지배인.png',
    unreadMsgCount: 0,
  },
  {
    id: '5',
    lastMsg: {
      content: '휴가에서 언제 돌아오시는지요. 돌아오시면 와인 몇병만 사다주세요',
      createdAt: new Date('2019-08-30 09:32:00'),
      userId: '',
    },
    name: '노준석 총지배인',
    photoUrl: '/images/노준석_총지배인.png',
    unreadMsgCount: 0,
  },
  {
    id: '6',
    lastMsg: {
      content: '304호 키를 잃어버렸어요 어떻게 해야하죠 ㅠ',
      createdAt: new Date('2019-08-29 09:32:00'),
      userId: '',
    },
    name: '김유나 인턴',
    photoUrl: '/images/김유나_인턴.png',
    unreadMsgCount: 0,
  },
  {
    id: '7',
    lastMsg: {
      content: '술먹자',
      createdAt: new Date('2019-08-28 09:32:00'),
      userId: '',
    },
    name: '구현모',
    photoUrl: '/images/구현모.png',
    unreadMsgCount: 0,
  },
  {
    id: '7',
    lastMsg: {
      content: '술먹자',
      createdAt: new Date('2019-08-28 09:32:00'),
      userId: '',
    },
    name: '구현모 2',
    photoUrl: '/images/구현모.png',
    unreadMsgCount: 0,
  },
  {
    id: '7',
    lastMsg: {
      content: '술먹자',
      createdAt: new Date('2019-08-28 09:32:00'),
      userId: '',
    },
    name: '구현모 3',
    photoUrl: '/images/구현모.png',
    unreadMsgCount: 0,
  },
  {
    id: '7',
    lastMsg: {
      content: '술먹자',
      createdAt: new Date('2019-08-28 09:32:00'),
      userId: '',
    },
    name: '구현모 4',
    photoUrl: '/images/구현모.png',
    unreadMsgCount: 0,
  },
];
