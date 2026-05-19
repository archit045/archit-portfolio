import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () =>
      window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-cyan-400/10 blur-[120px] pointer-events-none z-[1] transition-transform duration-150"
      style={{
        transform: `translate(${position.x - 150}px, ${
          position.y - 150
        }px)`,
      }}
    />
  );
};

export default CursorGlow;