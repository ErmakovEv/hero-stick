import { useEffect, useRef, useState } from "react";

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
  const animationFrameRef = useRef<number | null>(null);

  const inlineStyles: React.CSSProperties = {
    position: "absolute",
    backgroundColor: "#1b0a30",
    width: `${width}%`,
    height: "20%",
    bottom: 0,
    right: `${rightPos}%`,
  };

  // 1.4. Первоначальная анимация второй колонны
  useEffect(() => {
    if (!start) return;

    const draw = () => {
      if (rightPos < position) {
        setRightPos((pos) => pos + 2);
        animationFrameRef.current = requestAnimationFrame(draw);
      }
    };

    animationFrameRef.current = requestAnimationFrame(draw);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [rightPos, position, start]);

  // 5.1. Колонна и герой двигаются в левый край экрана
  useEffect(() => {
    if (!win) return;

    const draw = () => {
      if (rightPos < 100 - width) {
        setRightPos((pos) => pos + 2);
        animationFrameRef.current = requestAnimationFrame(draw);
      }
    };

    animationFrameRef.current = requestAnimationFrame(draw);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
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
          <Logo width={"50%"} height={"50%"} />
        </div>
      </div>
    </>
  );
}

export default ColumnTwo;
