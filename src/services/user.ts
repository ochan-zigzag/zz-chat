import React, { useEffect, useState } from 'react';

import { sleep } from '../commons/utils';
import { usersByUserId } from './data';

export interface User {
  id: string;
  name: string;
  photoUrl?: string;
}

const getUser = async (userId: string): Promise<User | undefined> => {
  await sleep(400);
  // 서버에서 가져왔다고 가정
  return usersByUserId[userId]; // 서버에서 가져왔다고 가정
};

export const useUser = (userId: string): [User | undefined, boolean, Error | undefined] => {
  const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const data = await getUser(userId);
        setUser(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return [user, loading, error];
};

export const useMyUser = () => {
  const myUserId = 'me'; // 내 유저 아이디를 어디선가 가져왔다고 가정..
  return useUser(myUserId);
};
