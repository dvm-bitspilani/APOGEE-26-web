import { useEffect, useState } from "react";
import styles from "./RegPreLoader.module.scss";

interface RegPreLoaderProps {
  loading: boolean;
  type?: "enter" | "exit";
  progress?: number;
}

export default function RegPreLoader({
  loading,
  type = "enter",
  progress = 0,
}: RegPreLoaderProps) {
  const [internalProgress, setInternalProgress] = useState(0);

  useEffect(() => {
    if (type === "exit") {
      const interval = setInterval(() => {
        setInternalProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2; 
        });
      }, 20);
      return () => clearInterval(interval);
    } else {
      const target = progress;
      if (internalProgress < target) {
        const diff = target - internalProgress;
        const inc = Math.max(1, diff / 5); 
        const timer = setTimeout(() => {
          setInternalProgress((prev) => Math.min(100, prev + inc));
        }, 50);
        return () => clearTimeout(timer);
      }
    }
  }, [progress, type, internalProgress]);

  const totalBlocks = 20;
  const activeBlockCount = Math.floor((internalProgress / 100) * totalBlocks);

  if (!loading) return null;

  return (
    <div
      className={`${styles.container} ${type === "exit" ? styles.exit : ""}`}
    >
      <div className={styles.background}></div>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            {type === "enter" ? "INITIALIZING" : "TERMINATING"}
          </h1>
          <div className={styles.subtitle}>
            System {type === "enter" ? "Boot" : "Shutdown"} Sequence
          </div>
        </div>

        <div className={styles.loaderContainer}>
          <div className={styles.loadingBar}>
            {Array.from({ length: totalBlocks }).map((_, index) => (
              <div
                key={index}
                className={`${styles.block} ${
                  index < activeBlockCount ? styles.active : ""
                } ${index < activeBlockCount - 1 ? styles.filled : ""}`}
              />
            ))}
          </div>
        </div>

        <div className={styles.statusText}>
          PROCESS: {Math.round(internalProgress)}%
        </div>
      </div>
    </div>
  );
}
