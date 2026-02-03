import React, { useMemo } from "react";

const AsteroidBackground = ({ count = 50 }) => {
  // Generate asteroid data once on component mount
  const asteroids = useMemo(() => {
    const colors = [
      "bg-gray-400",
      "bg-gray-500",
      "bg-slate-400",
      "bg-zinc-500",
      "bg-slate-600",
    ];

    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 2 + "px",
      color: colors[Math.floor(Math.random() * colors.length)],
      top: Math.random() * 40 - 20 + "%", // Starts between -20% and 20%
      left: Math.random() * 40 - 20 + "%", // Starts between -20% and 20%
      duration: Math.random() * 12 + 8 + "s",
      delay: Math.random() * 15 + "s",
    }));
  }, [count]);

  return (
    <>
      <style>
        {`
          @keyframes fall-diagonal {
            0% {
              transform: translate(-10vw, -10vh) rotate(0deg);
              opacity: 0;
            }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% {
              transform: translate(120vw, 120vh) rotate(720deg);
              opacity: 0;
            }
          }
        `}
      </style>

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gray-950">
        {asteroids.map((ast) => (
          <div
            key={ast.id}
            className={`absolute rounded-full opacity-0 ${ast.color}`}
            style={{
              width: ast.size,
              height: ast.size,
              top: ast.top,
              left: ast.left,
              animation: `fall-diagonal ${ast.duration} linear infinite ${ast.delay}`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default AsteroidBackground;
