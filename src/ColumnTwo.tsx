import { useEffect, useRef, useState } from "react";

type Props = {
  width: number;
  position: number;
  win: boolean;
  start: boolean;
  reset: boolean;
};

function ColumnTwo({ width, position, win, start, reset }: Props) {
  const [rightPos, setRightPos] = useState(0);
  const drawingTimeoutRef = useRef(0);
  const flagRef = useRef(true);

  const inlineStyles: React.CSSProperties = {
    position: "absolute",
    backgroundColor: "black",
    width: `${width}%`,
    height: "20%",
    bottom: 0,
    right: `${rightPos}%`,
  };

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

  useEffect(() => {
    if (reset) {
      setRightPos(0);
    }
  }, [reset]);

  return (
    <>
      {/* <style>{animationStyles}</style> */}
      <div key={1} className="column-two" style={{ ...inlineStyles }}></div>
    </>
  );
}

export default ColumnTwo;
