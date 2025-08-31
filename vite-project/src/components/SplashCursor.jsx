import { useState, useEffect } from "react";

export default function SpotlightCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: `radial-gradient(
          150px circle at ${pos.x}px ${pos.y}px,
          rgba(255, 255, 255, 0.2),
          transparent 80%
        )`,
        backgroundColor: "#2b2b2b", // base background
        transition: "background 0.05s ease-out", // smooth fading
      }}
    />
  );
}
