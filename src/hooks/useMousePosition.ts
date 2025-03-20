import { useEffect, useState, useCallback } from "react";

interface PositionTypes {
  x: Number;
  y: Number;
}

export const useMousePosition = () => {
  const [position, setPosition] = useState<PositionTypes>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return position;
};
