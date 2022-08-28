import React, { useState } from 'react';
import Header from './components/Header';
import PostList from './components/PostList';
import './css/App.css';

function App() {
  const [posts] = useState([
    { id: 1, title: 'JavaScript', body: 'Javascript это мой любимый язык програмирования' },
    { id: 2, title: 'JavaScript 2', body: 'Javascript это мой любимый язык програмирования' },
    { id: 3, title: 'JavaScript 3', body: 'Javascript это мой любимый язык програмирования' },
    { id: 4, title: 'JavaScript 4', body: 'Javascript это мой любимый язык програмирования' },
    { id: 5, title: 'JavaScript 5', body: 'Javascript это мой любимый язык програмирования' },
    { id: 6, title: 'JavaScript 7', body: 'Javascript это мой любимый язык програмирования' },
  ])
  return (
    <div className="App">
      <Header />
      <PostList posts={posts} />

    </div>
  );
}

export default App;