import { useEffect, useRef } from "react";
import { useScrollStore } from "../../../utils/store";

type Props = {
  children: React.ReactNode;
  maxTranslate?: number;
};

export default function NavBarScroll({ children, maxTranslate = 800}: Props) {
  const scroll = useScrollStore((s) => s.scroll);
  const ref = useRef<HTMLDivElement>(null);
  const lockedValue = useRef(0);

  useEffect(() => {
    let frame: number;

    const animate = () => {
      if (ref.current) {
        const next = Math.min(scroll.offset * maxTranslate, maxTranslate);
        console.log(scroll.offset,next)
        // 🚨 one-way lock (like your GSAP pull)
        lockedValue.current = Math.min(
  Math.max(lockedValue.current, next),
  260
);

        ref.current.style.transform = `translateX(-${lockedValue.current}px)`;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [scroll.offset, maxTranslate]);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}