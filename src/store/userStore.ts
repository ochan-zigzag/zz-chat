import { action, observable } from 'mobx';
import { createContext } from 'react';

import User from '../models/user';

class UserStore {
  @observable
  public myUserId = 'me'; // 내 유저 아이디를 어디선가 가져왔다고 가정..

  @observable
  private usersByUserId = new Map<string, User>();

  @action.bound
  public setUser(user: User) {
    this.usersByUserId.set(user.id, user);
  }

  public getUser = (userId: string) => {
    return this.usersByUserId.get(userId);
  };
}

export default createContext(new UserStore());
