import React from 'react';
import { DndProvider } from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend';
import { BrowserRouter, Route } from 'react-router-dom';

import ChatList from './pages/ChatList';
import Chatroom from './pages/Chatroom';

const dndOptions = { enableMouseEvents: true };

const App: React.FC = () => {
  return (
    <DndProvider backend={TouchBackend} options={dndOptions}>
      <BrowserRouter>
        <Route path="/" exact component={ChatList} />
        <Route path="/:chatroomId" component={Chatroom} />
      </BrowserRouter>
    </DndProvider>
  );
};

export default App;
