import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import ChatList from './pages/ChatList';
import Chatroom from './pages/Chatroom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ChatList} />
      <Route path="/:chatroomId" component={Chatroom} />
    </BrowserRouter>
  );
};

export default App;
