import React, { useState } from 'react';
import { TURNS } from './board';
  export function Players({ onPlayersSelected }) {
  const [playerXName, setPlayerXName] = useState('Player X');
  const [playerOName, setPlayerOName] = useState('Player O');
  const [selectedSymbol, setSelectedSymbol] = useState('');

  const handleStartGame = () => {
    onPlayersSelected(playerXName, playerOName, 'X', 'O');
  };
   
  
  return (
    <section className='start-section'>
      <div className='player-names'>
        <input
          type='text'
          placeholder='Player X Name'
          value={playerXName}
          onChange={(e) => setPlayerXName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Player O Name'
          value={playerOName}
          onChange={(e) => setPlayerOName(e.target.value)}
        />
        </div>
        
      <button onClick={handleStartGame}>Start Game</button>
    </section>
  );
}


