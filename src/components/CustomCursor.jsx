import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = e => setPos({ x: e.clientX, y: e.clientY });
    const prev = document.body.style.cursor;
    window.addEventListener("mousemove", move);
    document.body.style.cursor = "none";
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.style.cursor = prev;
    };
  }, []);

  return (
    <div style={{
      position: "fixed",
      left: pos.x, top: pos.y,
      pointerEvents: "none",
      transform: "translate(-50%, -10%)",
      zIndex: 9999
    }}>
      <svg viewBox="0 0 32 32" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <polygon points="2,2 30,16 17,19 14,30" fill="#9f9f9f" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default CustomCursor;