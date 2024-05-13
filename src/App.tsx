import React, { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import ColumnTwo from "./ColumnTwo";

/*
Фазы игры
1.Загрузка раунда
  1.1. Расчет ширины 2-й колонны
  1.2. Расчет позиции 2-й колонны
  1.3. Отрисовка 1-й колонны, героя
  1.4. Первоначальная анимация второй колонны
  1.4.1 Сброс в дефолт положения 2-й колонны
  1.5. Отрисовка кнопки
2. Ожидание нажатия на кнопку
  Ничего не происходит
3. Нажатие на кнопку
  3.1. Отрисовка моста
  3.2. Анимация падения моста
4. Движение героя
5. Если раунд выигран
  5.1. Колонна и героя двигаются в левый край экрана
  5.2. Мост disabled
  5.3. Возврат в п.1
  5.4. TODO: Отображение наград изменяется, изменяется номер раунда
6. Если это был последний раунд, появляется надпись ПОБЕДА и скачать
7. Если раунд проигран, предложение начать заново и все равно скачать
*/

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

  //Фаза 1
  useEffect(() => {
    let id: number;
    let id2: number;

    if (startRound) {
      setColumnTwoPOsition(Math.floor(Math.random() * 71)); // Установка значения позиции 2-й колонны
      // setColumnTwoWidth(Math.floor(Math.random() * 13) + 8); // Установка ширины 2-й колонны
      setColumnTwoWidth(16); // Установка ширины 2-й колонны
      setReset(true); // Сброс позиции для второй колонны для 2-й колонны
      id2 = window.setTimeout(() => {
        setReset(false); // Отмена сброса позиции для второй колонны для 2-й колонны
      });
      id = window.setTimeout(() => {
        setStartRound(false); // Все готово, начинаем следующий раунд
      }, 1000);
    }

    return () => {
      clearTimeout(id);
      clearTimeout(id2);
    };
  }, [startRound]);

  useEffect(() => {
    let id: number;
    let id1: number;
    let id2: number;
    if (bridgeRotate) {
      //Фазы 4
      id = window.setTimeout(() => setIsWalk(true), 1000);
      //Фаза 5
      if (winRound) {
        id1 = window.setTimeout(() => {
          setIsWalk(false);
          setIsWinWalk(true);
        }, 3500);

        id2 = window.setTimeout(() => {
          setBridgeRotate(false); //Статус поворота мостика
          setSizeBridge(0); // Размер мостика
          setWinRound(false);
          setIsWinWalk(false);
          setStartRound(true);
        }, 6000);
      }
    }

    return () => {
      clearTimeout(id);
      clearTimeout(id1);
      clearTimeout(id2);
    };
  }, [bridgeRotate, winRound]);

  const checkSuccess = () => {
    if (
      sizeBridge + 14 >= 100 - columnTwoPosition - columnTwoWidth &&
      sizeBridge + 14 < 100 - columnTwoPosition - 4
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
    bottom: "19.5%",
    left: "15%",
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
