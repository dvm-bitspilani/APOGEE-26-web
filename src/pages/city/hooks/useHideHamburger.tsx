import { useFrame } from "@react-three/fiber";
import { useScrollStore } from "../../../utils/store";
import { useHamburgerStore } from "../../../utils/store";

export function useHideOnScroll(ranges: [number, number][]) {
  const scroll = useScrollStore((s) => s.scroll);
  const setHidden = useHamburgerStore((s) => s.setIsHidden);
  const isHidden = useHamburgerStore((s) => s.isHidden);

  useFrame(() => {
    if (!scroll) return;

    console.log("scroll offset:", scroll.offset); // ✅ will log continuously

    const hidden = ranges.some(
      ([start, end]) =>
        scroll.offset >= start && scroll.offset <= end
    );

    // update only if changed (VERY IMPORTANT)
    if (hidden !== isHidden) {
      console.log("hidden changed:", hidden);
      setHidden(hidden);
    }
  });

  return isHidden;
}