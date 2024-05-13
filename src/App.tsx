import React, { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import ColumnTwo from "./ColumnTwo";

function App() {
  const [reset, setReset] = useState(false);
  const [startRound, setStartRound] = useState(true);
  const [winRound, setWinRound] = useState(false);
  const [isWalk, setIsWalk] = useState(false);
  const [winWalk, setIsWinWalk] = useState(false);

  const [columnTwoPosition, setColumnTwoPOsition] = useState<number>(0);

  const [columnTwoWidth, setColumnTwoWidth] = useState(0);

  const [sizeBridge, setSizeBridge] = useState(0);
  const [bridgeRotate, setBridgeRotate] = useState(false);

  const drawingTimeoutRef = useRef(0);
  const sizeRef = useRef(false);

  //Возвращает назад героя и вторую колонну
  useEffect(() => {
    let id: number;
    let id2: number;
    if (winRound) {
      id = window.setTimeout(() => {
        setIsWalk(false);
        setIsWinWalk(true);
      }, 3500);

      id2 = window.setTimeout(() => setStartRound(true), 6000);
    }

    return () => {
      clearTimeout(id);
      clearTimeout(id2);
    };
  }, [winRound]);

  //Запускает героя вперед
  useEffect(() => {
    let id: number;
    if (bridgeRotate) {
      id = window.setTimeout(() => setIsWalk(true), 1000);
    }

    return () => {
      clearTimeout(id);
    };
  }, [bridgeRotate]);

  //Старт раунд
  useEffect(() => {
    let id: number;
    let id2: number;

    if (startRound) {
      setWinRound(false);
      setBridgeRotate(false);
      setSizeBridge(0);
      setIsWinWalk(false);
      setColumnTwoPOsition(Math.floor(Math.random() * 71));
      setColumnTwoWidth(Math.floor(Math.random() * 13) + 8);
      setReset(true);
      id2 = window.setTimeout(() => {
        setReset(false);
      });
      id = window.setTimeout(() => {
        setStartRound(false);
      }, 1000);
    }

    return () => {
      clearTimeout(id);
      clearTimeout(id2);
    };
  }, [startRound]);

  const checkSuccess = () => {
    if (
      sizeBridge + 20 >= 100 - columnTwoPosition - columnTwoWidth &&
      sizeBridge < 100 - columnTwoPosition - 6
    ) {
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
    content: " ",
    position: "absolute",
    width: "1%",
    height: `${sizeBridge}%`,
    backgroundColor: "black",
    bottom: "20%",
    left: "11%",
  };

  return (
    <div className="app">
      <header>header</header>
      <main>
        <div className="game">
          <div className="game-field">
            <div className="column-one"></div>
            <ColumnTwo
              width={columnTwoWidth}
              position={columnTwoPosition}
              win={winWalk}
              start={startRound}
              reset={reset}
            />

            <Hero size={sizeBridge} animated={isWalk} win={winWalk} />
            {winWalk ? (
              <></>
            ) : (
              <div
                className={`bridge ${bridgeRotate ? "rotate" : ""}`}
                style={bridgeStyle}></div>
            )}
          </div>
        </div>
        <div className="info">
          {startRound ? (
            ""
          ) : (
            <div
              style={{ background: "red", display: "inline-block" }}
              onMouseDown={mouseDownHandler}
              onMouseUp={mouseUpHandler}>
              Click
            </div>
          )}
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
