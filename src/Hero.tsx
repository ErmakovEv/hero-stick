import { useEffect, useRef, useState } from "react";

type Props = {
  size: number;
  animated: boolean;
  win: boolean;
};

function Hero({ size, animated, win }: Props) {
  const [leftPos, setLeftPos] = useState(3);

  const drawingTimeoutRef = useRef(0);
  const flagRefWalk = useRef(true);
  const flagRefWin = useRef(true);

  const inlineStyles: React.CSSProperties = {
    position: "absolute",
    content: " ",
    top: "73%",
    left: `${leftPos}%`,
    width: "6%",
    height: "6%",
  };

  // const uniqueAnimationName1 = 'slideFromLeftYourComponentUnique1';

  // const animationStyles = `
  //   @keyframes ${uniqueAnimationName1} {
  //     from { left: 3%; }
  //     to { left: ${size + 10}%; }
  //   }
  // `;

  // const animationStyle: React.CSSProperties = {
  //   animationName: uniqueAnimationName1,
  //   animationDuration: '1s',
  //   animationFillMode: 'forwards',
  //   animationDelay: '1s, 2s',
  // };

  useEffect(() => {
    const draw = () => {
      console.log("!!!!");
      drawingTimeoutRef.current = window.setTimeout(() => {
        setLeftPos((pos) => pos + 2);
      }, 30);
    };

    const drawWin = () => {
      console.log("????");
      drawingTimeoutRef.current = window.setTimeout(() => {
        setLeftPos((pos) => pos - 2);
      }, 30);
    };

    if (animated && leftPos < size) {
      if (flagRefWalk.current) {
        setTimeout(draw, 1000);
        flagRefWalk.current = false;
      } else {
        draw();
      }
    }

    if (win && leftPos > 3 && !animated) {
      drawWin();
    }

    return () => {
      clearTimeout(drawingTimeoutRef.current);
    };
  }, [animated, leftPos, size, win]);

  // useEffect(() => {

  //   return () => {
  //     clearTimeout(drawingTimeoutRef.current);
  //   };
  // }, [leftPos, win]);

  return (
    <>
      {/* <style>{animationStyles}</style> */}
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
