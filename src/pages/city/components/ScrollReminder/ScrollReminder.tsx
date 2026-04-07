import { useEffect, useRef, useState } from "react";
import styles from "./ScrollReminder.module.scss";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useHamburgerStore } from "../../../../utils/store";
export default function ScrollReminder() {
  const delay = 2000;
  const [isIdle, setIsIdle] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const manualHidden = useHamburgerStore((s) => s.manualHidden);
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

    return () => {
      window.removeEventListener("scroll", resetTimer);
      window.removeEventListener("wheel", resetTimer);
      window.removeEventListener("touchmove", resetTimer);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  useGSAP(() => {
    if (manualHidden) return;
    gsap.registerPlugin(ScrollTrigger);
    const scrollLabelAnim = gsap.to(`.${styles.scrollLabel}`, {
      scrollTrigger: {
        trigger: document.scrollingElement,
        start: "top top",
        end: "+=300",
        scrub: true,
        onLeave: () => {
          scrollLabelAnim.kill();
        },
      },
      alpha: 0,
      y: -90,
      ease: `power1.out`,
    });
  });
  if (!isIdle) return null;
  if (manualHidden) return null;
  return (
    <div className={styles.scrollReminder}>
      <div className={styles.scrollLabel}>
        <h6 className={styles.scrollText}>SCROLL TO MOVE</h6>
        <div className={styles.scrollIconContainer}>
          <svg
            width="22"
            height="67"
            viewBox="0 0 22 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.84035 17.6462C12.48 17.3251 15.3971 18.3058 17.4713 20.0055C19.7049 21.8217 21.1503 24.4841 21.489 27.4059C21.6307 28.6669 21.6039 31.0271 21.5816 32.3899C21.5437 34.6762 21.7679 37.9166 21.2703 40.0711C20.9022 41.664 20.198 43.1525 19.2083 44.4294C17.3138 46.8779 14.7557 48.2315 11.7712 48.5695C9.01863 48.8566 6.17798 47.9255 4.03167 46.1284C1.78305 44.2499 0.360602 41.5102 0.0862073 38.5296C-0.051294 37.1052 0.02019 34.8472 0.0237339 33.3362C0.034011 28.9554 -0.448155 25.325 2.48084 21.6744C4.38074 19.3064 6.90103 17.9535 9.84035 17.6462ZM10.8858 46.0418C13.1802 45.9846 15.1819 45.1385 16.7843 43.406C17.7862 42.3248 18.499 40.9912 18.8518 39.5368C19.1986 38.1081 19.1267 36.1851 19.104 34.6814C19.0731 32.6423 19.1597 30.5498 19.1019 28.5197C19.0351 26.2107 18.0783 24.0258 16.4451 22.4543C14.8908 20.9557 12.8384 20.1366 10.7162 20.1677C8.43096 20.2419 6.37947 21.0895 4.7932 22.8329C3.79864 23.9179 3.0923 25.2516 2.74313 26.7039C2.35751 28.3253 2.51633 31.427 2.50281 33.2344C2.49294 34.5607 2.46054 36.4879 2.50742 37.7691C2.59176 40.0706 3.56055 42.2419 5.19785 43.7986C6.78676 45.3044 8.74125 46.0575 10.8858 46.0418Z"
              fill="#4DF4FC"
            />
            <path
              d="M10.6337 23.1437C10.8721 23.1322 11.0949 23.1616 11.3146 23.2646C11.588 23.3926 11.8355 23.6382 11.9353 23.9362C12.1246 24.5032 12.1368 28.6057 11.875 29.1082C11.6862 29.4695 11.3895 29.6404 11.0204 29.7517C10.5101 29.8061 9.7401 29.5094 9.65252 28.9325C9.45887 27.6634 9.60392 26.2776 9.56443 24.9877C9.53552 24.0404 9.65809 23.4143 10.6337 23.1437Z"
              fill="#EEE100"
            />
          </svg>
          <div className={styles.scrollArrow} />
          <div className={styles.scrollArrow} />
          <div className={styles.scrollArrow} />
          <div className={styles.scrollArrow} />
        </div>
      </div>
    </div>
  );
}
