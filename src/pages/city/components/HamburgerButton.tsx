import { useHamburgerStore } from "../../../utils/store";
// import { useHideOnScroll } from "../hooks/useHideHamburger";

type Props = {
  onClick: () => void;
  // ranges: [number, number][];
};

export default function HamburgerButton({ onClick }: Props) {
  const isHidden = useHamburgerStore((s) => s.isHidden);
  const manualHidden = useHamburgerStore((s) => s.manualHidden);

  const shouldHide = isHidden || manualHidden;

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
        right: 20,
        fontSize: 26,
        background: "black",
        color: "white",
        padding: "10px 14px",
        cursor: "pointer",
        zIndex: 9999,
        opacity: shouldHide ? 0 : 1,
        pointerEvents: shouldHide ? "none" : "auto",
      }}
    >
      ☰
    </button>
  );
}