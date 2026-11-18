import { useEffect, useState } from 'react';

// Counts seconds while `running` is true. Changing `resetKey` starts again from 0.
export function useTimer(running: boolean, resetKey: number): number {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setSeconds(0);
  }, [resetKey]);

  useEffect(() => {
    if (!running) return undefined;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  return seconds;
}
