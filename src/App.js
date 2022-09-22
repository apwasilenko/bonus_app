import React, { useState } from 'react';
import Header from './components/Header';
import PostList from './components/PostList';
import './css/App.css';

function App() {
  const [posts] = useState([
    { id: 1, title: 'JavaScript', body: 'Javascript это мой любимый язык програмирования 1' },
    { id: 2, title: 'JavaScript 2', body: 'Javascript это мой любимый язык програмирования 2' },
    { id: 3, title: 'JavaScript 3', body: 'Javascript это мой любимый язык програмирования 3' },
    { id: 4, title: 'JavaScript 4', body: 'Javascript это мой любимый язык програмирования 4' },
    { id: 5, title: 'JavaScript 5', body: 'Javascript это мой любимый язык програмирования 5' },
    { id: 6, title: 'JavaScript 7', body: 'Javascript это мой любимый язык програмирования 6' },
    { id: 1, title: 'JavaScript', body: 'Javascript это мой любимый язык програмирования 1' },
    { id: 2, title: 'JavaScript 2', body: 'Javascript это мой любимый язык програмирования 2' },
    { id: 3, title: 'JavaScript 3', body: 'Javascript это мой любимый язык програмирования 3' },
    { id: 4, title: 'JavaScript 4', body: 'Javascript это мой любимый язык програмирования 4' },
    { id: 5, title: 'JavaScript 5', body: 'Javascript это мой любимый язык програмирования 5' },
    { id: 6, title: 'JavaScript 7', body: 'Javascript это мой любимый язык програмирования 6' },
  ])
  return (
    <div className="App">
      <Header />
      <PostList posts={posts} />
    </div>
  );
}

export default App;



