import React from 'react';
import { useContext } from 'react';
import './App.css';
import Sidebar from './Component/Sidebar';
import Player from './Component/Player';
import Display from './Component/Display';
import { PlayContext } from './Context/PlayContext';

function App() {
  const { audioRef ,  treck } = useContext(PlayContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={treck.file} preload="auto"></audio>
    </div>
  );
}

export default App;
