import { useEffect } from "react";
import { useScrollStore } from "../../../utils/store";
import { useHamburgerStore } from "../../../utils/store";

export function useHideOnScroll(ranges: [number, number][]) {
  const scroll = useScrollStore((s) => s.scroll);
  const setHidden = useHamburgerStore((s) => s.setIsHidden);

  useEffect(() => {
    if (!scroll) return;

    const hidden = ranges.some(
      ([start, end]) =>
        scroll.offset >= start && scroll.offset <= end
    );

    setHidden(hidden);
  }, [scroll, ranges, setHidden]);

  return useHamburgerStore((s) => s.isHidden);
}