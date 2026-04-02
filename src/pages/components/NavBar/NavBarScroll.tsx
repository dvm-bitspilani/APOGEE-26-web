import { useEffect, useRef } from "react";
import { useScrollStore } from "../../../utils/store";

type Props = {
  children: React.ReactNode;
  maxTranslate?: number;
};

export default function NavBarScroll({ children, maxTranslate = 18000 }: Props) {
  //const scroll = useScrollStore((s) => s.scroll);
  const ref = useRef<HTMLDivElement>(null);
  const lockedValue = useRef(0);
  const isHovered = useRef(false);
  const prevTime = useRef(performance.now());
  useEffect(() => {

    const animate = (time: number) => {
      const delta = time - prevTime.current;
      prevTime.current = time;

      const offset = useScrollStore.getState().scroll?.offset;

      if (ref.current && typeof offset === "number") {
        let next = 0;

        if (!isHovered.current && typeof offset === "number") {
          next = Math.min(offset * maxTranslate, 360);
        }
        // const speed = 0.01 * delta; // adjust smoothing
        const k = isHovered.current ? 12 : 8; // faster on hover
        const alpha = 1 - Math.exp(-k * delta / 1000);
        // if (next>lockedValue.current ) {
        lockedValue.current += (next - lockedValue.current) * alpha; // faster when reversing
        // }
        // lockedValue.current += (next- lockedValue.current) * alpha;
        // lockedValue.current += (next - lockedValue.current) * speed;

        lockedValue.current = Math.min(lockedValue.current, 360);

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
      onMouseEnter={() => {
        isHovered.current = true;
      }}
      onMouseLeave={() => {
        isHovered.current = false;
      }}
      style={{
        position: "fixed",
        top: "50%",
        left: 0,
        zIndex: 999,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}