import { useHideOnScroll } from "../hooks/useHideHamburger";

type Props = {
  onClick: () => void;
  ranges: [number, number][];
};

export default function HamburgerButton({ onClick, ranges }: Props) {
  const isHidden = useHideOnScroll(ranges);

  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        fontSize: 26,
        background: "black",
        color: "white",
        padding: "10px 14px",
        cursor: "pointer",
        zIndex: 9999,
        opacity: isHidden ? 0 : 1,
        pointerEvents: isHidden ? "none" : "auto",
      }}
    >
      ☰
    </button>
  );
}