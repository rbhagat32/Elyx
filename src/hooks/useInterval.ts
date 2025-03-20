import { useEffect, useRef } from "react";

export const useInterval = (fn: () => void, timeout: number) => {
  const savedCallback = useRef<() => void | null>(null);

  // Store the latest function in a ref to avoid stale closures
  useEffect(() => {
    savedCallback.current = fn;
  }, [fn]);

  useEffect(() => {
    if (typeof timeout !== "number" || timeout <= 0) return; // Guard against invalid timeout values

    const interval = setInterval(() => {
      if (savedCallback.current) savedCallback.current();
    }, timeout * 1000);

    return () => clearInterval(interval);
  }, [timeout]);
};
