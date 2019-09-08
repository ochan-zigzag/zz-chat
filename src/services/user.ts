import { useObserver } from 'mobx-react-lite';
import React, { useContext, useEffect, useMemo, useState } from 'react';

import { sleep } from '../commons/utils';
import User from '../models/user';
import MyUserStore from '../store/userStore';
import { usersByUserId } from './data';

const getUser = async (userId: string): Promise<User | undefined> => {
  await sleep(10);
  // 서버에서 가져왔다고 가정
  return usersByUserId[userId]; // 서버에서 가져왔다고 가정
};

export const useUser = (userId: string): [User | undefined, boolean, Error | undefined] => {
  const myUserStore = useContext(MyUserStore);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const data = await getUser(userId);
        if (!data) {
          throw Error(`user ${userId} not found`);
        }
        myUserStore.setUser(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return useObserver(() => [myUserStore.getUser(userId), loading, error]);
};

export const useMyUser = () => {
  const myUserId = 'me'; // 내 유저 아이디를 어디선가 가져왔다고 가정..
  return useUser(myUserId);
};
