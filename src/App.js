import React from 'react';
import Subreddit from './features/subreddits/subreddit';
import Title from './features/title/title';
import ImageToggle from './features/imageToggle/imageToggle'
import SearchForm from './features/searchForm/searchForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <SearchForm />
      <ImageToggle />
      <Subreddit />
    </div>
  );
}

export default App;
