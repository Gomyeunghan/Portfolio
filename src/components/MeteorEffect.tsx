import { useEffect, useState, CSSProperties } from "react";

interface MeteorEffectProps {
  count?: number;
  white?: boolean;
  maxDelay?: number;
  minSpeed?: number;
  maxSpeed?: number;
  angle?: number;
  direction?: "left" | "right";
}

// 스타일 타입 정의
interface StarStyles extends CSSProperties {
  "--meteor-animation"?: string;
  animationDelay?: string;
}

const MAX_STAR_COUNT = 50;
const colors = ["#c77eff", "#f6ff7e", "#ff8d7e", "#ffffff"];

const createKeyframes = (direction: "left" | "right", angle: number) => {
  const xMove = 120 / Math.tan((angle * Math.PI) / 180);
  return `
    @keyframes meteor${direction === "left" ? "Left" : "Right"} {
      0% {
        top: -10vh;
        transform: translateX(0px);
        opacity: 1;
      }
      100% {
        top: 110vh;
        transform: translateX(${direction === "left" ? "-" : ""}${xMove}vh);
        opacity: 1;
      }
    }
  `;
};

export default function MeteorEffect({
  count = 12,
  // white = false,
  maxDelay = 15,
  minSpeed = 2,
  maxSpeed = 4,
  angle = 30,
  direction = "right",
}: MeteorEffectProps) {
  const starCount = Math.min(count, MAX_STAR_COUNT);
  const [starInterval, setStarInterval] = useState<number>(0);

  useEffect(() => {
    const calcStarInterval = () => {
      const innerWidth = window.innerWidth;
      setStarInterval(Math.floor((innerWidth * 1.5) / (count * 5)));
    };
    calcStarInterval();
    window.addEventListener("resize", calcStarInterval);
    return () => {
      window.removeEventListener("resize", calcStarInterval);
    };
  }, [count]);

  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = createKeyframes(direction, angle);
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [direction, angle]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array(starCount)
        .fill(0)
        .map((_, idx) => {
          const leftPosition =
            direction === "left"
              ? `${Math.random() * count * 5 * starInterval}px`
              : `${
                  window.innerHeight - Math.random() * count * 5 * starInterval
                }px`;
          const animDelay = `${Math.random() * maxDelay}s`;
          const animDuration =
            maxSpeed > minSpeed
              ? `${minSpeed + Math.random() * (maxSpeed - minSpeed)}s`
              : `${2 + Math.random() * 4}s`;
          const colorIndex = Math.floor(Math.random() * colors.length);
          const size = 2 + Math.floor(Math.random() * 5);
          const rotateAngle = direction === "left" ? -angle : -(180 - angle);

          const starStyle: StarStyles = {
            left: leftPosition,
            width: `${size}px`,
            height: `${size}px`,
            animation: `meteor${
              direction === "left" ? "Left" : "Right"
            } ${animDuration} ease-in infinite`,
            animationDelay: animDelay,
          };

          const innerStarStyle: CSSProperties = {
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: colors[colorIndex],
            boxShadow: `0px 0px 10px 3px ${colors[colorIndex]}`,
          };

          const trailStyle: CSSProperties = {
            top: "50%",
            left: "-950%",
            width: "2000%",
            height: "2px",
            background:
              "linear-gradient(to left, rgba(255,255,255,0), #ffffff)",
            transform: `rotateZ(${rotateAngle}deg) translateX(50%)`,
          };

          return (
            <div key={idx} className="absolute opacity-0" style={starStyle}>
              <div className="absolute rounded-full" style={innerStarStyle}>
                <div className="absolute" style={trailStyle} />
              </div>
            </div>
          );
        })}
    </div>
  );
}
