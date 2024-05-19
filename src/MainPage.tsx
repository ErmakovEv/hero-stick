import Info from './Info';
import About from './About';
import Game from './GamePage';
import { useState } from 'react';

function MainPage() {
  const [isGame, setIsGame] = useState(false);

  const handleStart = () => setIsGame(true);
  const handleEnd = () => setIsGame(false);

  return (
    <div className="game-page">
      {isGame ? <Game startGame={handleStart} endGame={handleEnd} /> : <About startGame={handleStart} />}
      <Info />
    </div>
  );
}

export default MainPage;
