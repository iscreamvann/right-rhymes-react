import React from 'react';
import LeftBar from './components/LeftBar';
import Main from './components/Main'
import RightBar from './components/RightBar';


function App() {
  return (
    <div className="grid-container">
      <LeftBar />
      <Main />
      <RightBar />
    </div>
  );
}

export default App;
