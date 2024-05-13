import { useEffect, useRef, useState } from 'react';

type Props = {
  size: number;
  animated: boolean;
  win: boolean;
  loose: boolean;
};

function Hero({ size, animated, win, loose }: Props) {
  const [leftPos, setLeftPos] = useState(5);
  const [topPos, setTopPos] = useState(73);
  const drawingTimeoutRef = useRef(0);
  const flagRefWalk = useRef(true);

  const inlineStyles: React.CSSProperties = {
    position: 'absolute',
    content: ' ',
    top: `${topPos}%`,
    left: `${leftPos}%`,
    width: '6%',
    height: '6%',
  };

  useEffect(() => {
    const draw = () => {
      drawingTimeoutRef.current = window.setTimeout(() => {
        setLeftPos((pos) => pos + 2);
      }, 30);
    };

    const drawWin = () => {
      drawingTimeoutRef.current = window.setTimeout(() => {
        setLeftPos((pos) => pos - 2);
      }, 30);
    };

    const drawLoose = () => {
      drawingTimeoutRef.current = window.setTimeout(() => {
        setTopPos((pos) => pos + 2);
      }, 30);
    };

    if (animated && leftPos < size + 14) {
      if (flagRefWalk.current) {
        setTimeout(draw, 1000);
        flagRefWalk.current = false;
      } else {
        draw();
      }
    }

    if (win && leftPos > 5 && !animated) {
      drawWin();
    }

    if (loose && topPos < 92) {
      drawLoose();
    }

    return () => {
      clearTimeout(drawingTimeoutRef.current);
    };
  }, [animated, leftPos, loose, size, topPos, win]);

  return (
    <>
      <div className="hero-wrapper" style={inlineStyles}>
        <div className="hero">
          <div className="hero-band"></div>
          <div className="hero-eye"></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
