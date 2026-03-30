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
    const offset = scroll?.offset;

    if (ref.current && typeof offset === "number") {
      const next = Math.min(offset * maxTranslate, maxTranslate);

      // smooth interpolation (GSAP-like)
      if(next>lockedValue.current){
      lockedValue.current += (next - lockedValue.current) * 0.1;
      }

      // one-way clamp
      lockedValue.current = Math.min(lockedValue.current, 260);

      ref.current.style.transform = `translateX(-${lockedValue.current}px)`;
    }

    frame = requestAnimationFrame(animate);
  };

  frame = requestAnimationFrame(animate);

  return () => cancelAnimationFrame(frame);
}, [scroll, maxTranslate]);
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