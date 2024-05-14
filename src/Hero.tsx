import { useEffect, useRef, useState } from "react";

type Props = {
  size: number;
  animated: boolean;
  win: boolean;
  loose: boolean;
};

function Hero({ size, animated, win, loose }: Props) {
  const [leftPos, setLeftPos] = useState(5);
  const [topPos, setTopPos] = useState(73);

  const flagRefWalk = useRef(true);
  const animationFrameRef = useRef<number | null>(null);

  const inlineStyles: React.CSSProperties = {
    position: "absolute",
    content: " ",
    top: `${topPos}%`,
    left: `${leftPos}%`,
    width: "6%",
    height: "6%",
  };

  useEffect(() => {
    const draw = () => {
      if (leftPos < size + 14) {
        setLeftPos((pos) => pos + 2);
        animationFrameRef.current = requestAnimationFrame(draw);
      }
    };

    const drawLoose = () => {
      if (topPos < 92) {
        setTopPos((pos) => pos + 2);
        animationFrameRef.current = requestAnimationFrame(drawLoose);
      }
    };

    const drawWin = () => {
      if (leftPos > 5) {
        setLeftPos((pos) => pos - 2);
        animationFrameRef.current = requestAnimationFrame(drawWin);
      }
    };

    if (animated) {
      if (flagRefWalk.current) {
        setTimeout(() => {
          animationFrameRef.current = requestAnimationFrame(draw);
        }, 1000);
        flagRefWalk.current = false;
      } else {
        animationFrameRef.current = requestAnimationFrame(draw);
      }
    }

    if (win) {
      animationFrameRef.current = requestAnimationFrame(drawWin);
    }

    if (loose) {
      animationFrameRef.current = requestAnimationFrame(drawLoose);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
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
