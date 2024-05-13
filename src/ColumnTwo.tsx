import { useEffect, useRef, useState } from 'react';

type Props = {
  width: number;
  position: number;
  win: boolean;
  start: boolean;
  reset: boolean;
  Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

function ColumnTwo({ width, position, win, start, reset, Logo }: Props) {
  const [rightPos, setRightPos] = useState(0);
  const drawingTimeoutRef = useRef(0);
  const flagRef = useRef(true);

  const inlineStyles: React.CSSProperties = {
    position: 'absolute',
    backgroundColor: 'black',
    width: `${width}%`,
    height: '20%',
    bottom: 0,
    right: `${rightPos}%`,
  };

  // 1.4. Первоначальная анимация второй колонны
  useEffect(() => {
    const draw = () => {
      drawingTimeoutRef.current = window.setTimeout(() => {
        setRightPos((pos) => pos + 2);
      }, 30);
    };

    if (start && rightPos < position) {
      draw();
    }

    return () => {
      clearTimeout(drawingTimeoutRef.current);
    };
  }, [rightPos, position, start]);

  // 5.1. Колонна и героя двигаются в левый край экрана
  useEffect(() => {
    const draw = () => {
      drawingTimeoutRef.current = window.setTimeout(() => {
        setRightPos((pos) => pos + 2);
      }, 30);
    };

    if (win && rightPos < 100 - width) {
      flagRef.current = true;
      draw();
    }

    return () => {
      clearTimeout(drawingTimeoutRef.current);
    };
  }, [rightPos, width, win]);

  // 1.4.1 Сброс в дефолт положения 2-й колонны
  useEffect(() => {
    if (reset) {
      setRightPos(0);
    }
  }, [reset]);

  return (
    <>
      <div className="column-two" style={inlineStyles}>
        <div className="column-two__logo">
          <Logo width={'50%'} height={'50%'} />
        </div>
      </div>
    </>
  );
}

export default ColumnTwo;
