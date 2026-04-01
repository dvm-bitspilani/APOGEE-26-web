import { useHamburgerStore } from "../../../utils/store";
// import { useHideOnScroll } from "../hooks/useHideHamburger";
import styles from "./HamburgerButton.module.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  onClick: () => void;
  // ranges: [number, number][];
};

export default function HamburgerButton({ onClick }: Props) {
  const isHidden = useHamburgerStore((s) => s.isHidden);
  const manualHidden = useHamburgerStore((s) => s.manualHidden);
  const hamButtonLinesRef = useRef<HTMLSpanElement[]>([]);

  const shouldHide = isHidden || manualHidden;

  useEffect(() => {
    const hamLinesTL = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { ease: "power1.inOut" },
    });
    hamLinesTL.fromTo(
      hamButtonLinesRef.current.slice(11, 23),
      { backgroundColor: "transparent" },
      { backgroundColor: "#4df4fc", stagger: 0.07 },
    );

    return () => {
      hamLinesTL.kill();
    };
  }, []);

  return (
    <button
      onClick={() => {
        onClick();

        // 👇 force hide on click
        useHamburgerStore.getState().setManualHidden(true);
      }}
      style={{
        position: "fixed",
        top: 20,
        left: 20,
        fontSize: 26,
        background: "transparent",
        border: "none",
        padding: "10px 14px",
        cursor: "pointer",
        zIndex: 9999,
        opacity: shouldHide ? 0 : 1,
        pointerEvents: shouldHide ? "none" : "auto",
      }}
    >
      <div className={styles.goBack + " " + styles.hamButton}>
        {Array.from({ length: 45 }).map((_, i) => (
          <div key={i} className={`${styles[`hamLineGrey${i + 1}`]}`}>
            <span></span>
          </div>
        ))}
        {Array.from({ length: 45 }).map((_, i) => (
          <div key={i} className={`${styles[`hamLine${i + 1}`]}`}>
            <span
              ref={(el) => {
                if (el) hamButtonLinesRef.current[i] = el;
              }}
            ></span>
          </div>
        ))}
        <div className={styles.hamBars}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </button>
  );
}
