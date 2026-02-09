import { useEffect, useRef, useState } from "react";
import styles from "./ScrollReminder.module.scss";

export default function ScrollReminder() {
  const delay = 2000;
  const [isIdle, setIsIdle] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const resetTimer = () => {
      setIsIdle(false);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setIsIdle(true);
      }, delay);
    };

    // Initial idle timer
    resetTimer();

    window.addEventListener("scroll", resetTimer, { passive: true });
    window.addEventListener("wheel", resetTimer, { passive: true });
    window.addEventListener("touchmove", resetTimer, { passive: true });
    window.addEventListener("keydown", resetTimer);

    return () => {
      window.removeEventListener("scroll", resetTimer);
      window.removeEventListener("wheel", resetTimer);
      window.removeEventListener("touchmove", resetTimer);
      window.removeEventListener("keydown", resetTimer);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!isIdle) return null;

  return (
    <div className={styles.scrollreminder}>
      <p>Keep scrolling</p>
    </div>
  );
}
