import { useEffect, useRef } from "react";
import { useScrollStore } from "../../../utils/store";

type Props = {
  children: React.ReactNode;
  maxTranslate?: number;
};

export default function NavBarScroll({ children, maxTranslate = 800}: Props) {
  //const scroll = useScrollStore((s) => s.scroll);
  const ref = useRef<HTMLDivElement>(null);
  const lockedValue = useRef(0);

  const prevTime = useRef(performance.now());
useEffect(() => {

const animate = (time: number) => {
  const delta = time - prevTime.current;
  prevTime.current = time;

  const offset = useScrollStore.getState().scroll?.offset;

  if (ref.current && typeof offset === "number") {
    const next = Math.min(offset * maxTranslate, maxTranslate);

    const speed = 0.01 * delta; // adjust smoothing

    lockedValue.current += (next - lockedValue.current) * speed;

    lockedValue.current = Math.min(lockedValue.current, 260);

    ref.current.style.transform = `translate3d(-${lockedValue.current}px, 0, 0)`;
  }

  requestAnimationFrame(animate);
};

requestAnimationFrame(animate);

  // return () => cancelAnimationFrame(frame);
}, [maxTranslate]);
  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        top: "50%",
        left: 0,
        zIndex: 9999,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}