import { useEffect, useState, useCallback } from "react";

export const useDimension = () => {
  const isClient = typeof window !== "undefined";

  const [width, setWidth] = useState(isClient ? window.innerWidth : 0);
  const [height, setHeight] = useState(isClient ? window.innerHeight : 0);

  const handleResize = useCallback(() => {
    requestAnimationFrame(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
  }, []);

  useEffect(() => {
    if (!isClient) return;

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return { width, height };
};
