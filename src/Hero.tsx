import { useEffect, useRef, useState } from "react";

type Props = {
  size: number;
  animated: boolean;
  win: boolean;
};

function Hero({ size, animated, win }: Props) {
  const [leftPos, setLeftPos] = useState(5);

  const drawingTimeoutRef = useRef(0);
  const flagRefWalk = useRef(true);

  const inlineStyles: React.CSSProperties = {
    position: "absolute",
    content: " ",
    top: "73%",
    left: `${leftPos}%`,
    width: "6%",
    height: "6%",
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

    return () => {
      clearTimeout(drawingTimeoutRef.current);
    };
  }, [animated, leftPos, size, win]);

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
