import { useEffect, useRef, useState } from 'react';

type Props = {
  width: number;
  position: number;
  win: boolean;
};

function ColumnTwo({ width, position, win }: Props) {
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

  useEffect(() => {
    const draw = () => {
      drawingTimeoutRef.current = window.setTimeout(() => {
        setRightPos((pos) => pos + 2);
      }, 30);
    };

    if (rightPos < position) {
      draw();
    }

    return () => {
      clearTimeout(drawingTimeoutRef.current);
    };
  }, [rightPos, position]);

  useEffect(() => {
    const draw = () => {
      drawingTimeoutRef.current = window.setTimeout(() => {
        setRightPos((pos) => pos + 2);
      }, 30);
    };

    if (win && rightPos < 100 - width) {
      if (flagRef.current) {
        setTimeout(draw, 3000);
        flagRef.current = false;
      } else {
        draw();
      }
    }

    return () => {
      clearTimeout(drawingTimeoutRef.current);
    };
  }, [rightPos, width, win]);

  return (
    <>
      {/* <style>{animationStyles}</style> */}
      <div key={1} className="column-two" style={{ ...inlineStyles }}></div>
    </>
  );
}

export default ColumnTwo;
