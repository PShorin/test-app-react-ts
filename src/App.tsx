import React from 'react';
import './App.scss';
import VideoBlock from './components/Video-block';
import GoBlock from './components/GoBlock';

function App() {
  return (
    <div className="App max-height">
      <VideoBlock/>
      <GoBlock/>
    </div>
  );
}

export default App;
