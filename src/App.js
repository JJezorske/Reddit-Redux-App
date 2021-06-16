import React from 'react';
import Subreddit from './features/subreddits/subreddit';
import Title from './features/title/title';
import SearchForm from './features/searchForm/searchForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <SearchForm />
      <Subreddit />
    </div>
  );
}

export default App;
