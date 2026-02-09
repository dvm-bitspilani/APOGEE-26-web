import { useEffect, useRef, useState } from "react";
import styles from "./ScrollReminder.module.scss";
import Arrowgif from "/gif/arrow.gif"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
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
  useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const scrollLabelAnim = gsap.to(`.${styles.scrollLabel}`, {
            scrollTrigger: {
                trigger: document.scrollingElement,
                start: 'top top',
                end: '+=300',
                scrub: true,
                onLeave: () => {
                    scrollLabelAnim.kill()

                },
            },
            alpha: 0,
            y: -90,
            ease: `power1.out`,
        })
    })
  if (!isIdle) return null;

  return (
  <div className={styles.scrollReminder}>
    <div className={styles.scrollLabel}>
      
      <h1 className={styles.scrollText}>Scroll</h1>   {/* 👈 move here */}

      <div className={styles.scrollArrows}>
        {
          Array(parseInt(styles.numberOfArrows))
            .fill(null)
            .map((_, index) => (
              <div key={index} className={styles.scrollArrow} />
            ))
        }
      </div>

    </div>
  </div>
);

}
