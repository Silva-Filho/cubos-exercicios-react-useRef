import React, { useRef } from 'react';

import { Controls } from './components/Controls';

import './App.css';

const musicUrl = 'https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/The%20Von%20Trapp%20Family%20Choir%20-%20Alge.mp3';

export function App() {
  const audioRef = useRef( null );

  return (
    <div className="App">
      <audio src={ musicUrl } ref={ audioRef } />

      <Controls audioRef={ audioRef } />
    </div>
  );
}
