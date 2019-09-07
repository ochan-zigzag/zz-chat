import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import ChatList from './pages/ChatList';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ChatList} />
    </BrowserRouter>
  );
};

export default App;
