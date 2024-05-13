import React, { useRef, useState } from 'react';
import Hero from './Hero';
import ColumnTwo from './ColumnTwo';
import ColumnTwoShadow from './ColumnTwoShadow';

function App() {
  const [winRound, setWinRound] = useState(false);

  const [columnTwoPosition, setColumnTwoPOsition] = useState<number>(() => Math.floor(Math.random() * 71));

  const [columnTwoWidth, setColumnTwoWidth] = useState(() => Math.floor(Math.random() * 13) + 8);

  const [sizeBridge, setSizeBridge] = useState(0);
  const [bridgeRotate, setBridgeRotate] = useState(false);

  const drawingTimeoutRef = useRef(0);
  const sizeRef = useRef(false);

  const checkSuccess = () => {
    if (sizeBridge + 11 >= 100 - columnTwoPosition - columnTwoWidth && sizeBridge + 11 < 100 - columnTwoPosition - 6) {
      setWinRound(true);
    } else {
      setWinRound(false);
    }
  };

  const draw = () => {
    drawingTimeoutRef.current = window.setTimeout(() => {
      if (sizeRef.current) {
        setSizeBridge((s) => (s += 0.5));
        draw();
      }
    }, 1);
  };

  const mouseDownHandler = () => {
    sizeRef.current = true;
    draw();
  };

  const mouseUpHandler = () => {
    if (drawingTimeoutRef.current) {
      sizeRef.current = false;
      clearTimeout(drawingTimeoutRef.current);
      setBridgeRotate(true);
      checkSuccess();
    }
  };

  const bridgeStyle: React.CSSProperties = {
    content: ' ',
    position: 'absolute',
    width: '1%',
    height: `${sizeBridge}%`,
    backgroundColor: 'black',
    bottom: '20%',
    left: '11%',
  };

  return (
    <div className="app">
      <header>header</header>
      <main>
        <div className="game">
          <div className="game-field">
            <div className="column-one"></div>
            <ColumnTwo width={columnTwoWidth} position={columnTwoPosition} win={winRound} />

            <Hero size={sizeBridge} animated={bridgeRotate} win={winRound} />
            <div className={`bridge ${bridgeRotate ? 'rotate' : ''}`} style={bridgeStyle}></div>
          </div>
        </div>
        <div className="info">
          <div
            style={{ background: 'red', display: 'inline-block' }}
            onMouseDown={mouseDownHandler}
            onMouseUp={mouseUpHandler}
          >
            Click
          </div>
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
