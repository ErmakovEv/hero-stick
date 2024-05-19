import Info from './Info';
import About from './About';
import Game from './GamePage';
import { useState } from 'react';

function MainPage() {
  const [isGame, setIsGame] = useState(false);

  const handleStart = () => setIsGame(true);
  const handleEnd = () => setIsGame(false);

  const handleDownload = () => {
    const cvUrl = '/cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="game-page">
      {isGame ? (
        <Game endGame={handleEnd} downloadCv={handleDownload} />
      ) : (
        <About downloadCv={handleDownload} startGame={handleStart} />
      )}
      <Info />
    </div>
  );
}

export default MainPage;
