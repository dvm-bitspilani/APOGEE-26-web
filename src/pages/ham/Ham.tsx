import { useEffect, useState } from "react";
import HamMobile from "./HamMobile";
import HamDesktop from "./HamDesktop";

export default function Ham({ onClose }: { onClose?: () => void }) {
  const [desktop, setDesktop] = useState(() => window.innerWidth / window.innerHeight >= 0.6);
  useEffect(() => {
    const update = () => setDesktop(window.innerWidth / window.innerHeight >= 0.6);
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);
  return desktop ? <HamDesktop onClose={onClose} /> : <HamMobile onClose={onClose} />;
}
