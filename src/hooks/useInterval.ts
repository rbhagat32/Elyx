import { useEffect, useRef } from "react";

const useInterval = (fn: () => void, timeout: number) => {
  const savedCallback = useRef<() => void | null>(null);

  useEffect(() => {
    savedCallback.current = fn;
  }, [fn]);

  useEffect(() => {
    if (typeof timeout !== "number" || timeout <= 0) return;
    const interval = setInterval(() => {
      if (savedCallback.current) savedCallback.current();
    }, timeout * 1000);

    return () => clearInterval(interval);
  }, [timeout]);
};

export { useInterval };
