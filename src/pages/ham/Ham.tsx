import { useEffect, useState } from "react";
import HamMobile from "./HamMobile";
import HamDesktop from "./HamDesktop";

export default function Ham() {
  const [width, setwidth] = useState(window.innerWidth < 650 ? false : true);

  useEffect(() => {
    addEventListener("resize", () => {
      if (window.innerWidth < 650) {
        setwidth(false);
      } else {
        setwidth(true);
      }
      return () => {
        removeEventListener("resize", () => {});
      };
    });
  }, []);

  return width ? <HamDesktop /> : <HamMobile />;
}
