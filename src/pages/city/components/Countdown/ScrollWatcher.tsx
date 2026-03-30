import { useFrame } from "@react-three/fiber";
import { useScrollStore, useHamburgerStore } from "../../../../utils/store";

export function ScrollWatcher({ ranges }: { ranges: [number, number][] }) {
  const scroll = useScrollStore((s) => s.scroll);
  const setHidden = useHamburgerStore((s) => s.setIsHidden);
  const isHidden = useHamburgerStore((s) => s.isHidden);

  useFrame(() => {
    if (!scroll) return;

    const hidden = ranges.some(
      ([start, end]) =>
        scroll.offset >= start && scroll.offset <= end
    );

    if (hidden !== isHidden) {
      setHidden(hidden);
    }
  });

  return null;
}